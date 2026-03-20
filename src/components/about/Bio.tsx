import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface BioProps {
  english: boolean;
}

export default function Bio({ english }: BioProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [english]);

  return (
    <div className="flex flex-col gap-8">
      {english ? (
        <div ref={contentRef} key="en" className="flex flex-col gap-6 text-[15px] md:text-[16px] leading-[1.9] text-cream/70">
          <p>
            <span className="font-cormorant text-[20px] md:text-[22px] text-cream/90 font-light">Ryuichi Oshimoto</span> was born and raised in Japan, and moved to New York City in 1984 to pursue his dream of becoming a world-class photographer.
          </p>
          <p>
            After years of working under the tutelage of some of the leaders in the field of commercial photography, he went out on his own in 1991. Ryuichi is presently based in <span className="text-cream/90">Los Angeles</span> and <span className="text-cream/90">Hayama-machi, Kanagawa, Japan</span>.
          </p>
          <p className="text-cream/50 italic">
            He is willing to travel, and looks forward the chance to put the artistry and spiritual energy of his photography to work for you.
          </p>
        </div>
      ) : (
        <div ref={contentRef} key="ja" className="flex flex-col gap-8 font-noto-serif-jp text-[15px] leading-[2.2] text-cream/70">
          <p>人物、風景、物、被写体にかかわらず、その場の空気感を撮り収め人々と共有したいと思って撮影に望んでいる。</p>
          <p className="text-[14px] text-cream/50 leading-[2.4]">
            東京品川生まれ。82年英語の勉強のため2年の予定で渡米。84年ニューヨークに渡り刺激を受け予定を変更、広告写真スタジオで働き始める。
            91年フォトグラファーとして独立。95年ニューヨークからロサンゼルスに拠点を移しエンターテインメント関係の撮影中心に活動。
            2018年から神奈川県葉山町へ拠点を移すも、日本と米国間を行き来している。趣味は山歩き、キャンプ、犬と遊ぶこと。
          </p>
        </div>
      )}
    </div>
  );
}
