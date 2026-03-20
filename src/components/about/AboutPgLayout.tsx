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
  const headingRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
    if (imgRef.current) {
      gsap.fromTo(imgRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: 'power3.out' }
      );
    }
    if (bioRef.current) {
      gsap.fromTo(bioRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <main className="text-[15px] px-[5%] flex gap-24 flex-col max-w-[1200px] mx-auto">
      <div className="flex gap-[5%] md:flex-row flex-col">
        <div ref={imgRef} className="mb-10 md:mb-0 md:w-[33%]" style={{ opacity: 0 }}>
          <img className="w-full" src={ABOUT_IMAGE} alt="Ryuichi Oshimoto portrait" />
        </div>
        <div ref={bioRef} className="md:w-[60%] leading-8 flex flex-col gap-10" style={{ opacity: 0 }}>
          <div ref={headingRef} style={{ opacity: 0 }}>
            <p className="font-noto-serif-jp text-[11px] tracking-[0.4em] text-warm-gray mb-2">写真家</p>
            <h1 className="font-cormorant text-[36px] md:text-[48px] font-light tracking-[0.04em] leading-[1.1] mb-1">
              Ryuichi Oshimoto
            </h1>
            <p className="font-noto-serif-jp text-[18px] tracking-[0.15em] text-cream/60">押本龍一</p>
            <div className="w-12 h-px bg-warm-gray/40 mt-6" />
          </div>
          <div className="text-[13px] flex gap-8" role="tablist" aria-label="Language selection">
            <button
              role="tab"
              aria-selected={english}
              onClick={() => setEnglish(true)}
              className={`tracking-[0.2em] uppercase transition duration-300 pb-1 ${english ? 'text-cream border-b border-cream/50' : 'text-warm-gray/50 hover:text-cream/70'}`}
            >
              English
            </button>
            <button
              role="tab"
              aria-selected={!english}
              onClick={() => setEnglish(false)}
              className={`tracking-[0.2em] transition duration-300 pb-1 font-noto-serif-jp ${!english ? 'text-cream border-b border-cream/50' : 'text-warm-gray/50 hover:text-cream/70'}`}
            >
              日本語
            </button>
          </div>
          <Bio english={english} />
        </div>
      </div>

      <hr className="vintage-rule" />

      <div>
        <p className="font-noto-serif-jp text-[11px] tracking-[0.4em] text-warm-gray mb-3">展覧会</p>
        <h2 className="font-cormorant text-[30px] md:text-[40px] font-light tracking-[0.04em] mb-10">Exhibitions</h2>
        <Events />
      </div>

      <hr className="vintage-rule" />

      <Magazine english={english} />
    </main>
  );
}
