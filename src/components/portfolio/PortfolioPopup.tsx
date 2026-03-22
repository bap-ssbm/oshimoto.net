import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AiOutlineClose } from 'react-icons/ai';
import { CgPlayTrackPrev, CgPlayTrackNext } from 'react-icons/cg';

interface PortfolioPopupProps {
  setImgI: (i: number) => void;
  imgI: number;
  setShowImg: (show: boolean) => void;
  imgData: { src: string }[];
}

export default function PortfolioPopup({ setImgI, imgI, setShowImg, imgData }: PortfolioPopupProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.inOut' });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setImgI((imgI + 1) % imgData.length);
      } else if (e.key === 'ArrowLeft') {
        setImgI(imgI === 0 ? imgData.length - 1 : imgI - 1);
      } else if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imgI]);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }
  }, [imgI]);

  const close = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          setShowImg(false);
          document.body.style.overflow = 'auto';
        },
      });
    }
  };

  return (
    <div
      ref={overlayRef}
      style={{ opacity: 0 }}
      className="fixed w-full h-[100svh] top-0 left-0 z-50 bg-black-950 box-border grid place-items-center"
      role="dialog"
      aria-label="Image viewer"
    >
      <div className="absolute w-full top-0 p-[5%] flex justify-between">
        <p className="font-bold">
          {imgI + 1}/{imgData.length}
        </p>
        <button onClick={close} className="text-[20px]" aria-label="Close image viewer">
          <AiOutlineClose />
        </button>
      </div>
      <div>
        <img
          ref={imgRef}
          key={imgI}
          className="max-w-[80vw] max-h-[90svh] pointer-events-none"
          src={imgData[imgI].src}
          alt={`Portfolio image ${imgI + 1} of ${imgData.length}`}
        />
      </div>
      <button
        className="absolute md:hover:scale-110 duration-200 border p-1.5 md:p-2 border-black/30 rounded-full bottom-[8%] md:bottom-[50%] right-[30%] md:right-[5%] text-[18px] md:text-[25px]"
        onClick={() => {
          const nextI = imgI + 1;
          setImgI(nextI === imgData.length ? 0 : nextI);
        }}
        aria-label="Next image"
      >
        <CgPlayTrackNext className="fill-current" />
      </button>
      <button
        className="absolute md:hover:scale-110 duration-200 border p-1.5 md:p-2 border-black/30 rounded-full bottom-[8%] md:bottom-[50%] left-[30%] md:left-[5%] text-[18px] md:text-[25px]"
        onClick={() => {
          const nextI = imgI - 1;
          setImgI(nextI === -1 ? imgData.length - 1 : nextI);
        }}
        aria-label="Previous image"
      >
        <CgPlayTrackPrev />
      </button>
    </div>
  );
}
