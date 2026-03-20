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
        duration: 0.3,
      });
    }
  }, [showImg]);

  return (
    <div
      onMouseEnter={() => setShowImg(true)}
      onMouseLeave={() => setShowImg(false)}
      className="flex justify-between hover:opacity-75 duration-200 relative"
    >
      <div ref={imgRef} style={{ opacity: 0 }} className="w-[25%] absolute right-0 bottom-0 translate-y-[50%] pointer-events-none">
        <img className="" src={img} alt="" width={400} height={400} />
      </div>
      <div className="py-6 border-t border-black-600 flex justify-between md:w-[70%] w-full flex-col md:flex-row">
        <p>{date}</p>
        <div className="text-end">
          <p>{name}</p>
          <p>{place}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Check instagram
            </a>
          )}
          {pdf && (
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
