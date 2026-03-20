import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GalleryProps {
  imgData: { src: string }[];
  setImgI: (i: number) => void;
  setShowImg: (show: boolean) => void;
}

export default function Gallery({ imgData, setImgI, setShowImg }: GalleryProps) {
  const [numCol, setNumCol] = useState(2);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1280) setNumCol(4);
      else if (window.innerWidth > 1024) setNumCol(3);
      else setNumCol(2);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(el, { opacity: 0 }, { opacity: 1, delay: i * 0.35, duration: 0.8 });
      }
    });
  }, [imgData]);

  const openImage = (i: number) => {
    setImgI(i);
    setShowImg(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div style={{ columnCount: numCol, columnGap: '24px' }} className="w-full">
      {imgData.map((pic, i) => (
        <button
          key={i}
          type="button"
          ref={(el) => { itemRefs.current[i] = el; }}
          style={{ opacity: 0 }}
          className="cursor-pointer overflow-hidden mb-6 break-inside-avoid block w-full text-left"
          onClick={() => openImage(i)}
          aria-label={`View portfolio image ${i + 1}`}
        >
          <div className="hover:scale-110 relative h-auto duration-[2300ms] ease-in hover:grayscale">
            <img height={500} width={500} src={pic.src} loading="lazy" alt="" className="w-full" />
          </div>
        </button>
      ))}
    </div>
  );
}
