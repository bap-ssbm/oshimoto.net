import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades an element in when it scrolls into view.
 * Returns a ref to attach to the target element.
 * The element should have style={{ opacity: 0 }} to prevent flash.
 */
export function useGsapScrollReveal(duration = 0.9, delay = 0.4) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay,
          duration,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }
  }, []);

  return ref;
}
