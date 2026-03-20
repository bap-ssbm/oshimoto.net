import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GalleriesProps {
  english: boolean;
}

export default function Galleries({ english }: GalleriesProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }
  }, [english]);

  return (
    <div className="flex flex-col gap-10 md:w-[50%]">
      <div>
        <h2 className="tracking-[4px]">-Exhibitions-</h2>
      </div>
      <ul className="text-[14px] space-y-5">
        <li>
          <div className="space-x-4">
            <p className="text-[14px]">PICTORICO SHOP&GALLERY Omotesando</p>
            <span ref={textRef} key={english ? 'en' : 'ja'}>
              {english ? 'SIGMA Web 10th Anniversary' : 'SIGMA Web掲載10周年記念企画'}
            </span>
          </div>
        </li>
        <li>
          <div className="space-x-4">
            <p className="text-[14px]">SPACE AO in Hayama</p>
            <p>Death valley</p>
          </div>
        </li>
        <li>
          <div className="space-x-4">
            <p className="text-[14px]">LUMIX BASE TOKYO</p>
            <span key={english ? 'en2' : 'ja2'}>
              {english ? 'Alegría: In A New Light' : '「新たなる光 生まれ変わったアレグリア」'}
            </span>
            <a className="underline ml-3" href="/events/lbtsyasinten.pdf" download>
              PDF 1
            </a>
            <a className="underline ml-3" href="/events/LBTphoto.oshimoto.pdf" download>
              PDF 2
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
