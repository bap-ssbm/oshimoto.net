import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface EventProps {
  date: string;
  name: string;
  place: string;
  pdf?: string;
  link?: string;
  img: string;
}

export default function Event({ link, date, name, place, pdf, img }: EventProps) {
  const [showImg, setShowImg] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        opacity: showImg ? 1 : 0,
        scale: showImg ? 1 : 0.95,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [showImg]);

  return (
    <div
      onMouseEnter={() => setShowImg(true)}
      onMouseLeave={() => setShowImg(false)}
      className="group flex justify-between relative cursor-default"
    >
      {/* Hover image preview */}
      <div ref={imgRef} style={{ opacity: 0 }} className="hidden md:block w-[22%] absolute right-0 bottom-0 translate-y-[40%] pointer-events-none z-10">
        <img src={img} alt="" width={400} height={400} className="shadow-2xl" />
      </div>

      {/* Event content */}
      <div className="py-8 border-t border-warm-gray/15 flex justify-between md:w-[72%] w-full flex-col md:flex-row gap-2 group-hover:border-gold/20 transition-all duration-600 md:group-hover:pl-4">
        <p className="text-warm-gray/80 text-[12px] tracking-[0.15em] font-anonymous-pro md:w-[35%]">{date}</p>
        <div className="md:text-end">
          <p className="font-noto-serif-jp text-[15px] md:text-[16px] text-cream/90">{name}</p>
          <p className="text-warm-gray text-[13px] mt-1">{place}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-[12px] tracking-[0.15em] uppercase text-cream/40 hover:text-gold transition-colors duration-500 mt-2 inline-block">
              Instagram →
            </a>
          )}
          {pdf && (
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="text-[12px] tracking-[0.15em] uppercase text-cream/40 hover:text-gold transition-colors duration-500 mt-2 inline-block ml-4">
              PDF →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
