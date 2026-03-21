import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryProps {
  imgData: { src: string }[];
  setImgI: (i: number) => void;
  setShowImg: (show: boolean) => void;
}

export default function Gallery({ imgData, setImgI, setShowImg }: GalleryProps) {
  const [numCol, setNumCol] = useState(2);
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  const handleImageLoad = useCallback(() => setLoadedCount(prev => prev + 1), []);
  const handleImageError = useCallback(() => setLoadedCount(prev => prev + 1), []);

  useEffect(() => {
    const threshold = Math.min(8, imgData.length);
    if (loadedCount >= threshold && !allLoaded) setAllLoaded(true);
  }, [loadedCount, imgData.length, allLoaded]);

  // Fallback: check already-loaded images on tab focus + timeout
  useEffect(() => {
    if (allLoaded) return;

    const checkLoaded = () => {
      let count = 0;
      containerRef.current?.querySelectorAll('img').forEach((img) => {
        if ((img as HTMLImageElement).complete) count++;
      });
      if (count >= Math.min(8, imgData.length)) setAllLoaded(true);
    };

    const onVisibility = () => { if (document.visibilityState === 'visible') checkLoaded(); };
    document.addEventListener('visibilitychange', onVisibility);

    const fallbackTimer = setTimeout(() => { if (!allLoaded) setAllLoaded(true); }, 8000);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      clearTimeout(fallbackTimer);
    };
  }, [allLoaded, imgData.length]);

  useEffect(() => {
    if (!allLoaded) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    itemRefs.current.forEach((el) => {
      if (!el) return;
      const wrap = el.querySelector('.gallery-img-wrap') as HTMLElement;
      if (wrap) {
        gsap.fromTo(wrap,
          { opacity: 0, y: prefersReduced ? 0 : 20 },
          {
            opacity: 1, y: 0,
            duration: prefersReduced ? 0.3 : 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      }
    });

    ScrollTrigger.refresh();
  }, [allLoaded]);

  const openImage = (i: number) => {
    setImgI(i);
    setShowImg(true);
    document.body.style.overflow = 'hidden';
  };

  const progress = imgData.length > 0 ? Math.round((loadedCount / imgData.length) * 100) : 0;

  return (
    <div className="relative">
      {/* Image counter */}
      <div className="px-[5%] md:px-[12%] mb-8 flex justify-between items-center">
        <p className="font-anonymous-pro text-[11px] text-warm-gray/30 tracking-[0.15em]">
          {imgData.length} photographs
        </p>
        {!allLoaded && (
          <div className="flex items-center gap-3">
            <div className="w-24 h-px bg-warm-gray/20 relative overflow-hidden">
              <div className="h-full bg-gold/40 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
            </div>
            <span className="font-anonymous-pro text-[10px] text-warm-gray/30">{progress}%</span>
          </div>
        )}
      </div>

      <div
        ref={containerRef}
        style={{
          columnCount: numCol,
          columnGap: '16px',
          opacity: allLoaded ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
        className="w-full px-[5%] md:px-[12%]"
      >
        {imgData.map((pic, i) => (
          <button
            key={i}
            type="button"
            ref={(el) => { itemRefs.current[i] = el; }}
            className="group cursor-pointer overflow-hidden mb-4 break-inside-avoid block w-full text-left relative"
            onClick={() => openImage(i)}
            aria-label={`View portfolio image ${i + 1}`}
          >
            <div className="gallery-img-wrap overflow-hidden">
              <div className="relative h-auto">
                <img
                  height={500}
                  width={500}
                  src={pic.src}
                  loading="lazy"
                  alt=""
                  className="w-full transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04]"
                  style={{ filter: 'grayscale(0.2)' }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
                {/* Hover overlay with number */}
                <div className="absolute inset-0 bg-black-950/0 group-hover:bg-black-950/40 transition-colors duration-500 flex items-end p-4">
                  <span className="font-anonymous-pro text-[10px] text-cream/0 group-hover:text-cream/50 transition-colors duration-500 tracking-[0.1em]">
                    {String(i + 1).padStart(2, '0')} / {String(imgData.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
