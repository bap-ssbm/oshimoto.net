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
  const containerRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

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

  const onLoad = useCallback(() => setLoadedCount(p => p + 1), []);

  const progress = imgData.length > 0 ? Math.round((loadedCount / imgData.length) * 100) : 0;
  const allLoaded = loadedCount >= imgData.length;

  // Animate items on scroll — runs once after mount
  useEffect(() => {
    if (animated.current) return;
    animated.current = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    requestAnimationFrame(() => {
      containerRef.current?.querySelectorAll('.gallery-item').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: prefersReduced ? 0 : 20 },
          {
            opacity: 1, y: 0,
            duration: prefersReduced ? 0.3 : 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          }
        );
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const openImage = (i: number) => {
    setImgI(i);
    setShowImg(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="relative">
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
        style={{ columnCount: numCol, columnGap: '16px' }}
        className="w-full px-[5%] md:px-[12%]"
      >
        {imgData.map((pic, i) => (
          <button
            key={i}
            type="button"
            className="gallery-item group cursor-pointer overflow-hidden mb-4 break-inside-avoid block w-full text-left relative"
            onClick={() => openImage(i)}
            aria-label={`View portfolio image ${i + 1}`}
            style={{ opacity: 0 }}
          >
            <div className="overflow-hidden">
              <div className="relative h-auto">
                <img
                  height={500}
                  width={500}
                  src={pic.src}
                  loading="lazy"
                  alt=""
                  className="w-full transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04]"
                  style={{ filter: 'grayscale(0.2)' }}
                  onLoad={onLoad}
                  onError={onLoad}
                />
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
