import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagazineProps {
  english: boolean;
}

export default function Magazine({ english }: MagazineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    }
  }, [english]);

  return (
    <div>
      <p className="font-noto-serif-jp text-[11px] tracking-[0.6em] text-warm-gray/70 mb-5 italic">掲載誌</p>
      <h2 className="font-cormorant text-[36px] md:text-[52px] font-light tracking-[-0.02em] leading-[1.05] mb-14">Publications</h2>

      <div ref={containerRef} key={english ? 'en' : 'ja'} className="flex flex-col">
        <a
          href={english
            ? 'https://www.sigma-global.com/jp/special/archive-contents/?category=oshimoto-photoessay'
            : 'https://www.sigma-global.com/jp/magazine/m_series/oshimoto-photoessay/'}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row py-8 md:py-10 border-t border-warm-gray/[0.08] gap-4 md:gap-0 md:items-baseline"
        >
          <span className="font-anonymous-pro text-[11px] text-warm-gray/50 tracking-[0.15em] md:w-[20%]">SIGMA</span>
          <span className={`md:w-[65%] text-cream/60 group-hover:text-gold transition-colors duration-500 leading-7 ${english ? 'text-[15px]' : 'font-noto-serif-jp text-[14px]'}`}>
            {english
              ? '"The Sights I Encountered" — A photo essay describing the sights encountered in travels.'
              : '「私の出会う光景」写真家押本龍一が各地を巡り、出会った光景を写真と文章で綴るフォトエッセイ。'}
          </span>
          <span className="md:w-[15%] text-right text-[11px] tracking-[0.2em] uppercase text-warm-gray/30 group-hover:text-gold/60 transition-colors duration-500">
            Read →
          </span>
        </a>

        <a
          href="https://dc.watch.impress.co.jp/cda/dialy/2007/06/27/6526.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row py-8 md:py-10 border-t border-warm-gray/[0.08] gap-4 md:gap-0 md:items-baseline"
        >
          <span className="font-anonymous-pro text-[11px] text-warm-gray/50 tracking-[0.15em] md:w-[20%]">デジカメWatch</span>
          <span className={`md:w-[65%] text-cream/60 group-hover:text-gold transition-colors duration-500 leading-7 ${english ? 'text-[15px]' : 'font-noto-serif-jp text-[14px]'}`}>
            {english
              ? 'Digital Photo Diary in USA'
              : '押本龍一のUSAデジタルフォト日記　コメディーグループを撮影した'}
          </span>
          <span className="md:w-[15%] text-right text-[11px] tracking-[0.2em] uppercase text-warm-gray/30 group-hover:text-gold/60 transition-colors duration-500">
            Read →
          </span>
        </a>

        <div className="border-t border-warm-gray/[0.08]" />
      </div>
    </div>
  );
}
