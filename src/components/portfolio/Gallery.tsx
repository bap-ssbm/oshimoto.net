import { useState, useEffect, useRef, useCallback } from 'react';

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

  const handleImageLoad = useCallback(() => {
    setLoadedCount(prev => prev + 1);
  }, []);

  const handleImageError = useCallback(() => {
    setLoadedCount(prev => prev + 1);
  }, []);

  // Trigger animations once enough images loaded (first 8 or all)
  useEffect(() => {
    const threshold = Math.min(8, imgData.length);
    if (loadedCount >= threshold && !allLoaded) {
      setAllLoaded(true);
    }
  }, [loadedCount, imgData.length, allLoaded]);

  useEffect(() => {
    if (!allLoaded || !containerRef.current) return;
    // Trigger mask-image reveal by updating mask-position
    requestAnimationFrame(() => {
      containerRef.current!.style.maskPosition = '0% 0%';
    });
  }, [allLoaded]);

  const openImage = (i: number) => {
    setImgI(i);
    setShowImg(true);
    document.body.style.overflow = 'hidden';
  };

  const progress = imgData.length > 0 ? Math.round((loadedCount / imgData.length) * 100) : 0;

  return (
    <div className="relative">
      {/* Loading indicator */}
      {!allLoaded && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-48 h-px bg-warm-gray/20 relative overflow-hidden">
            <div
              className="h-full bg-cream/60 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-cormorant text-[13px] tracking-[0.2em] text-warm-gray/50">
            Loading {progress}%
          </p>
        </div>
      )}

      <div
        ref={containerRef}
        style={{
          columnCount: numCol,
          columnGap: '20px',
          opacity: allLoaded ? 1 : 0,
          transition: 'opacity 0.3s',
          maskImage: 'linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,0.1) 79%, rgba(255,255,255,0) 100%)',
          maskSize: '200% 100%',
          maskPosition: '100% 0%',
        }}
        className="w-full gallery-mask-reveal"
      >
        {imgData.map((pic, i) => (
          <button
            key={i}
            type="button"
className="cursor-pointer overflow-hidden mb-5 break-inside-avoid block w-full text-left"
            onClick={() => openImage(i)}
            aria-label={`View portfolio image ${i + 1}`}
          >
            <div className="gallery-img-wrap overflow-hidden">
              <div className="hover:scale-105 relative h-auto duration-[2000ms] ease-out hover:grayscale-[0.3]">
                <img
                  height={500}
                  width={500}
                  src={pic.src}
                  loading="lazy"
                  alt=""
                  className="w-full"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
