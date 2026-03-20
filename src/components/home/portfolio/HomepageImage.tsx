import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HomepageImageProps {
  children: ReactNode;
  imgURL: string;
  linkTo: string;
}

export default function HomepageImage({ children, imgURL, linkTo }: HomepageImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dur = prefersReduced ? 0.3 : undefined;

    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: dur ?? 0.9, delay: dur ? 0 : 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
        }
      );
    }
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: dur ?? 0.9, delay: dur ? 0 : 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 80%', once: true },
        }
      );
    }
  }, []);

  return (
    <a href={linkTo}>
      <div ref={containerRef} style={{ opacity: 0 }} className="overflow-hidden snap-normal snap-center">
        <div className="relative w-screen flex justify-center">
          <div className="overflow-hidden">
            <div className="hover:scale-110 hover:brightness-50 relative h-auto duration-[4000ms] ease-in">
              <div className="pointer-events-none">
                <img loading="eager" width={1400} height={200} src={imgURL} alt="" />
              </div>
            </div>
          </div>
          <div ref={textRef} style={{ opacity: 0 }} className="absolute md:left-[0] top-[45%] w-full text-center tracking-[5px] text-base md:text-xl">
            <h2>{children}</h2>
          </div>
        </div>
      </div>
    </a>
  );
}
