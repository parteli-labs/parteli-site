'use client';

import { useEffect } from 'react';

/**
 * Scroll behaviour for the landing page, ported from the reference design:
 * the nav turns solid past the top, the hero photo drifts slower than the page,
 * and `[data-rv]` elements below the fold fade up as they enter view.
 * Elements already on screen at load are never hidden.
 */
export function PageEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nav = document.getElementById('nav');
    const heroImg = document.getElementById('heroImg');

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        nav?.toggleAttribute('data-solid', y > 40);
        if (!reduce && heroImg && y < window.innerHeight * 1.2) {
          heroImg.style.transform = `translateY(${y * 0.12}px)`;
        }
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let io: IntersectionObserver | undefined;
    if (!reduce && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.removeAttribute('data-rv-pre');
            io?.unobserve(e.target);
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>('[data-rv]').forEach((el, i) => {
        if (el.getBoundingClientRect().top <= vh) return;
        el.setAttribute('data-rv-pre', '');
        el.style.transitionDelay = `${(i % 3) * 80}ms`;
        io?.observe(el);
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  return null;
}
