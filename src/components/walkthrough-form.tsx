'use client';

import { useId, useRef, useState } from 'react';

import { cta, form } from '@/content/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/** Same shape the route enforces. Deliberately permissive. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WalkthroughForm({ styles }: { styles: Record<string, string> }) {
  const s = styles;
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [showFallback, setShowFallback] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const shopId = useId();
  const emailId = useId();
  const errorId = useId();

  /** Errors send focus to the field at fault, not to the message about it. */
  function fail(text: string, fallback: boolean) {
    setStatus('error');
    setMessage(text);
    setShowFallback(fallback);
    requestAnimationFrame(() => emailRef.current?.focus());
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') ?? '').trim();

    // Checked here so the commonest mistake costs no round trip. `noValidate` is
    // set on the form so this message replaces the browser's, rather than racing it.
    if (!EMAIL_RE.test(email)) {
      fail(
        email
          ? 'That email address does not look right. Check it and try again.'
          : 'We need an email address to reply to.',
        false,
      );
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/walkthrough', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shop: data.get('shop'),
          email,
          company: data.get('company'),
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        fallback?: boolean;
      };

      if (!res.ok) {
        fail(json.error || 'Something went wrong. Try again.', Boolean(json.fallback));
        return;
      }

      setStatus('sent');
    } catch {
      fail('We could not reach the server. Check your connection.', true);
    }
  }

  if (status === 'sent') {
    return (
      <div className={s.formDone} role="status" aria-live="polite">
        <p className={`${s.formDoneTitle} ${s.display}`}>{form.successTitle}</p>
        <p className={s.formDoneBody}>{form.successBody}</p>
      </div>
    );
  }

  const sending = status === 'sending';
  const errored = status === 'error';

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <div className={s.formField}>
        <label className={s.formLabel} htmlFor={shopId}>
          {form.shopLabel}
        </label>
        <input
          className={s.formInput}
          id={shopId}
          name="shop"
          type="text"
          autoComplete="organization"
          placeholder={form.shopPlaceholder}
          maxLength={120}
          disabled={sending}
        />
      </div>

      <div className={s.formField}>
        <label className={s.formLabel} htmlFor={emailId}>
          {form.emailLabel}
        </label>
        <input
          className={s.formInput}
          id={emailId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={form.emailPlaceholder}
          maxLength={200}
          required
          ref={emailRef}
          aria-describedby={errored ? errorId : undefined}
          aria-invalid={errored || undefined}
          disabled={sending}
        />
      </div>

      {/* Honeypot. Hidden from sight and from assistive tech, never autofilled. */}
      <div className={s.formTrap} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button className={s.btn} type="submit" disabled={sending}>
        {sending ? form.submitting : form.submit}
      </button>

      <p className={s.formError} id={errorId} role="alert" hidden={!errored}>
        {message}
        {showFallback && (
          <>
            {' '}
            {form.fallbackLead}{' '}
            <a className={s.formErrorLink} href={`mailto:${cta.email}`}>
              {cta.email}
            </a>
          </>
        )}
      </p>

      <p className={s.formPrivacy}>{form.privacy}</p>
    </form>
  );
}
