/**
 * Walkthrough requests → email, via Resend.
 *
 * Configuration (never committed; set in .env.local and in Vercel's env settings):
 *   RESEND_API_KEY      required. Without it the route returns 503 and the form
 *                       falls back to the mailto link rather than pretending to send.
 *   CONTACT_TO_EMAIL    where requests land. Defaults to hello@parteli.com.
 *   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend. Defaults to Resend's
 *                       onboarding@resend.dev, which can ONLY deliver to the address
 *                       that owns the Resend account — fine for testing, not for
 *                       production. Verify parteli.com in Resend and set this.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TO = process.env.CONTACT_TO_EMAIL || 'hello@parteli.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'Parteli <onboarding@resend.dev>';

/** Deliberately permissive: rejecting odd-but-valid addresses loses real leads. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX = { shop: 120, email: 200 } as const;

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

/** Body text is plain and quoted so a submitted value can never read as instruction. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;

  // Honeypot: a real person never fills a field they cannot see. Answer 200 so a
  // bot gets no signal that it was caught.
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const shop = clean(body.shop, MAX.shop);
  const email = clean(body.email, MAX.email);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'That email address does not look right. Check it and try again.' },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration, not the visitor's problem — say so honestly and let the
    // form offer the mailto fallback.
    console.error('[walkthrough] RESEND_API_KEY is not set; cannot send.');
    // The visitor is told what to do, not what we failed to configure.
    return NextResponse.json(
      { error: 'We are taking these by email for now.', fallback: true },
      { status: 503 },
    );
  }

  const shopLine = shop || '(not given)';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Walkthrough request — ${shopLine}`,
        text: [
          'A shop asked for a walkthrough.',
          '',
          `Shop:  ${shopLine}`,
          `Email: ${email}`,
        ].join('\n'),
        html: [
          '<p>A shop asked for a walkthrough.</p>',
          `<p><strong>Shop:</strong> ${escapeHtml(shopLine)}<br>`,
          `<strong>Email:</strong> ${escapeHtml(email)}</p>`,
        ].join(''),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error(`[walkthrough] Resend responded ${res.status}: ${detail}`);
      return NextResponse.json(
        { error: 'We could not send that just now. Try again.', fallback: true },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[walkthrough] send failed:', error);
    return NextResponse.json(
      { error: 'We could not send that just now. Try again.', fallback: true },
      { status: 502 },
    );
  }
}
