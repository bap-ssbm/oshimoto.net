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
      <h2 className="text-[30px] mb-10">Magazines</h2>
      <div className="flex py-5 border-t gap-5 justify-between">
        <p className="text-[14px]">SIGMA</p>
        {english ? (
          <a
            ref={sigmaRef}
            key="sigma-en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline duration-300 transition"
            href="https://www.sigma-global.com/jp/special/archive-contents/?category=oshimoto-photoessay"
          >
            "Ryuichi Oshimoto "The Sights I Encountered" A photo essay in which the photographer describes the sights
            he encountered in his travels."
          </a>
        ) : (
          <a
            ref={sigmaRef}
            key="sigma-ja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline duration-300 transition"
            href="https://www.sigma-global.com/jp/magazine/m_series/oshimoto-photoessay/"
          >
            "押本龍一「私の出会う光景」 写真家押本龍一が各地を巡り、 出会った光景を写真と文章で綴るフォトエッセイ。"
          </a>
        )}
      </div>
      <div className="flex py-5 border-t gap-5 justify-between">
        <p className="text-[14px]">デジカメWatch</p>
        {english ? (
          <a
            ref={dcRef}
            key="dc-en"
            className="hover:underline duration-300 transition"
            href="https://dc.watch.impress.co.jp/cda/dialy/2007/06/27/6526.html"
          >
            Digital Photo Diary in USA on dc.watch.impress.co.
          </a>
        ) : (
          <a
            ref={dcRef}
            key="dc-ja"
            className="hover:underline duration-300 transition"
            href="https://dc.watch.impress.co.jp/cda/dialy/2007/06/27/6526.html"
          >
            押本龍一のUSAデジタルフォト日記　コメディーグループを撮影した
          </a>
        )}
      </div>
    </div>
  );
}
