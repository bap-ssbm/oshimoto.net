import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magazine from './Magazine';
import Bio from './Bio';
import Events from '../home/Events/Events';
import { ABOUT_IMAGE } from '../../data/site-config';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPgLayout() {
  const [english, setEnglish] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const bioSectionRef = useRef<HTMLDivElement>(null);
  const exhibitionsRef = useRef<HTMLDivElement>(null);
  const pubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const d = (v: number) => prefersReduced ? 0.3 : v;

    // Hero image — clip-path from bottom
    if (imgRef.current) {
      gsap.set(imgRef.current, { clipPath: 'inset(100% 0 0 0)' });
      gsap.to(imgRef.current, {
        clipPath: 'inset(0% 0 0 0)', duration: d(1.6), delay: 0.1, ease: 'power4.inOut',
      });
    }

    // Name overlapping the image — slides up from below
    if (nameRef.current) {
      gsap.fromTo(nameRef.current,
        { y: prefersReduced ? 0 : 80, opacity: 0 },
        { y: 0, opacity: 1, duration: d(1.2), delay: 0.6, ease: 'power4.out' }
      );
    }

    // Bio section
    if (bioSectionRef.current) {
      gsap.fromTo(bioSectionRef.current,
        { y: prefersReduced ? 0 : 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: d(1), ease: 'power3.out',
          scrollTrigger: { trigger: bioSectionRef.current, start: 'top 80%', once: true },
        }
      );
    }

    // Exhibitions
    if (exhibitionsRef.current) {
      gsap.fromTo(exhibitionsRef.current,
        { y: prefersReduced ? 0 : 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: d(1), ease: 'power3.out',
          scrollTrigger: { trigger: exhibitionsRef.current, start: 'top 80%', once: true },
        }
      );
    }

    // Publications
    if (pubRef.current) {
      gsap.fromTo(pubRef.current,
        { y: prefersReduced ? 0 : 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: d(1), ease: 'power3.out',
          scrollTrigger: { trigger: pubRef.current, start: 'top 80%', once: true },
        }
      );
    }
  }, []);

  const yearsActive = new Date().getFullYear() - 1984;

  return (
    <main>
      {/* ── Hero: full-bleed image with overlapping name ── */}
      <div ref={heroRef} className="relative mb-24 md:mb-40">
        {/* Image — takes ~60% width on desktop, full on mobile */}
        <div ref={imgRef} className="md:w-[55%] md:ml-auto overflow-hidden" style={{ clipPath: 'inset(100% 0 0 0)' }}>
          <img
            className="w-full h-[60svh] md:h-[85svh] object-cover object-[center_20%]"
            src={ABOUT_IMAGE}
            alt="Ryuichi Oshimoto portrait"
          />
        </div>

        {/* Name block — overlaps the image on the left side */}
        <div ref={nameRef} className="md:absolute md:left-[5%] md:bottom-[-60px] bg-gradient-to-r from-black-950 via-black-950 to-black-950/80 md:p-12 px-[5%] pt-8 md:pt-0 md:max-w-[50%]" style={{ opacity: 0 }}>
          <p className="font-noto-serif-jp text-[11px] tracking-[0.6em] text-warm-gray/70 mb-4 italic">写真家</p>
          <h1 className="font-cormorant text-[44px] md:text-[72px] font-light tracking-[-0.02em] leading-[1.0]">
            Ryuichi<br />Oshimoto
          </h1>
          <p className="font-noto-serif-jp text-[16px] md:text-[20px] tracking-[0.15em] text-cream/50 mt-4">押本龍一</p>
          <div className="flex items-center gap-6 mt-8">
            <div className="w-12 h-px bg-gold/40" />
            <span className="font-anonymous-pro text-[11px] text-warm-gray/40 tracking-[0.15em]">Est. 1984 — {yearsActive} yrs</span>
          </div>
        </div>
      </div>

      {/* ── Bio section ── */}
      <div ref={bioSectionRef} className="px-[5%] md:px-[12%] max-w-[1200px] mx-auto mb-32 md:mb-48" style={{ opacity: 0 }}>
        <div className="md:ml-[35%]">
          <div className="flex gap-8 mb-10" role="tablist" aria-label="Language selection">
            <button
              role="tab"
              aria-selected={english}
              onClick={() => setEnglish(true)}
              className={`text-[11px] tracking-[0.25em] uppercase transition duration-500 pb-1 ${english ? 'text-cream border-b border-gold/50' : 'text-warm-gray/30 hover:text-cream/60'}`}
            >
              English
            </button>
            <button
              role="tab"
              aria-selected={!english}
              onClick={() => setEnglish(false)}
              className={`text-[11px] tracking-[0.25em] transition duration-500 pb-1 font-noto-serif-jp ${!english ? 'text-cream border-b border-gold/50' : 'text-warm-gray/30 hover:text-cream/60'}`}
            >
              日本語
            </button>
          </div>
          <Bio english={english} />
        </div>
      </div>

      {/* ── Exhibitions ── */}
      <div ref={exhibitionsRef} className="px-[5%] md:px-[12%] max-w-[1200px] mx-auto mb-32 md:mb-48" style={{ opacity: 0 }}>
        <p className="font-noto-serif-jp text-[11px] tracking-[0.6em] text-warm-gray/70 mb-5 italic">展覧会</p>
        <h2 className="font-cormorant text-[38px] md:text-[56px] font-light tracking-[-0.02em] leading-[1.05] mb-16 md:mb-24">Exhibitions</h2>
        <Events />
      </div>

      <div className="mx-[5%] md:mx-[12%] h-px bg-warm-gray/[0.06]" />

      {/* ── Publications ── */}
      <div ref={pubRef} className="px-[5%] md:px-[12%] max-w-[1200px] mx-auto py-32 md:py-48" style={{ opacity: 0 }}>
        <Magazine english={english} />
      </div>
    </main>
  );
}
