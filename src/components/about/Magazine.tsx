import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagazineProps {
  english: boolean;
}

export default function Magazine({ english }: MagazineProps) {
  const sigmaRef = useRef<HTMLAnchorElement>(null);
  const dcRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (sigmaRef.current) {
      gsap.fromTo(sigmaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }
    if (dcRef.current) {
      gsap.fromTo(dcRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }
  }, [english]);

  return (
    <div className="md:w-[70%]">
      <p className="font-noto-serif-jp text-[11px] tracking-[0.4em] text-warm-gray mb-3">掲載誌</p>
      <h2 className="font-cormorant text-[30px] md:text-[40px] font-light tracking-[0.04em] mb-10">Publications</h2>
      <div className="flex py-6 border-t border-warm-gray/15 gap-5 justify-between">
        <p className="text-[13px] text-warm-gray font-cormorant tracking-[0.05em]">SIGMA</p>
        {english ? (
          <a ref={sigmaRef} key="sigma-en" target="_blank" rel="noopener noreferrer"
            className="text-cream/70 hover:text-cream duration-300 transition text-[14px] leading-6"
            href="https://www.sigma-global.com/jp/special/archive-contents/?category=oshimoto-photoessay">
            "The Sights I Encountered" — A photo essay describing the sights encountered in travels.
          </a>
        ) : (
          <a ref={sigmaRef} key="sigma-ja" target="_blank" rel="noopener noreferrer"
            className="text-cream/70 hover:text-cream duration-300 transition font-noto-serif-jp text-[14px] leading-7"
            href="https://www.sigma-global.com/jp/magazine/m_series/oshimoto-photoessay/">
            「私の出会う光景」写真家押本龍一が各地を巡り、出会った光景を写真と文章で綴るフォトエッセイ。
          </a>
        )}
      </div>
      <div className="flex py-6 border-t border-warm-gray/15 gap-5 justify-between">
        <p className="text-[13px] text-warm-gray font-cormorant tracking-[0.05em]">デジカメWatch</p>
        {english ? (
          <a ref={dcRef} key="dc-en"
            className="text-cream/70 hover:text-cream duration-300 transition text-[14px] leading-6"
            href="https://dc.watch.impress.co.jp/cda/dialy/2007/06/27/6526.html">
            Digital Photo Diary in USA
          </a>
        ) : (
          <a ref={dcRef} key="dc-ja"
            className="text-cream/70 hover:text-cream duration-300 transition font-noto-serif-jp text-[14px] leading-7"
            href="https://dc.watch.impress.co.jp/cda/dialy/2007/06/27/6526.html">
            押本龍一のUSAデジタルフォト日記　コメディーグループを撮影した
          </a>
        )}
      </div>
    </div>
  );
}
