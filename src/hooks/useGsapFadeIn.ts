import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Fades an element in on mount using GSAP.
 * Returns a ref to attach to the target element.
 * The element should have style={{ opacity: 0 }} to prevent flash.
 */
export function useGsapFadeIn(duration = 0.8, delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration, delay });
    }
  }, []);

  return ref;
}
