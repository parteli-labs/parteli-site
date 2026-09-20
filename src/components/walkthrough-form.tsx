'use client';

import { useId, useRef, useState } from 'react';

import { cta, form } from '@/content/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function WalkthroughForm({ styles }: { styles: Record<string, string> }) {
  const s = styles;
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [showFallback, setShowFallback] = useState(false);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const shopId = useId();
  const emailId = useId();
  const errorId = useId();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    const data = new FormData(event.currentTarget);
    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/walkthrough', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shop: data.get('shop'),
          email: data.get('email'),
          company: data.get('company'),
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        fallback?: boolean;
      };

      if (!res.ok) {
        setStatus('error');
        setMessage(json.error || 'Something went wrong. Try again.');
        setShowFallback(Boolean(json.fallback));
        // Move focus so a screen reader announces the problem.
        requestAnimationFrame(() => errorRef.current?.focus());
        return;
      }

      setStatus('sent');
    } catch {
      setStatus('error');
      setMessage('We could not reach the server. Check your connection, or email us directly.');
      setShowFallback(true);
      requestAnimationFrame(() => errorRef.current?.focus());
    }
  }

  if (status === 'sent') {
    return (
      <div className={s.formDone} role="status">
        <p className={`${s.formDoneTitle} ${s.display}`}>{form.successTitle}</p>
        <p className={s.formDoneBody}>{form.successBody}</p>
      </div>
    );
  }

  const sending = status === 'sending';

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
          aria-describedby={status === 'error' ? errorId : undefined}
          aria-invalid={status === 'error' || undefined}
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

      {status === 'error' && (
        <p
          className={s.formError}
          id={errorId}
          ref={errorRef}
          tabIndex={-1}
          role="alert"
        >
          {message}
          {showFallback && (
            <>
              {' '}
              <a className={s.formErrorLink} href={`mailto:${cta.email}`}>
                {cta.email}
              </a>
            </>
          )}
        </p>
      )}

      <p className={s.formPrivacy}>{form.privacy}</p>
    </form>
  );
}
