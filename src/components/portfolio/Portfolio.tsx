import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import PortfolioPopup from './PortfolioPopup';

interface PortfolioProps {
  imgData: { src: string; cols?: number; rows?: number }[];
}

export default function Portfolio({ imgData }: PortfolioProps) {
  const [imgI, setImgI] = useState(0);
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#img=')) {
      const key = hash.replace('#img=', '');
      const idx = imgData.findIndex(img => img.src.includes(key));
      if (idx !== -1) {
        setImgI(idx);
        setShowImg(true);
        document.body.style.overflow = 'hidden';
      }
    }
  }, [imgData]);

  return (
    <div className="px-[5%] box-border flex justify-center pt-[50px] md:pt-[100px]">
      <Gallery imgData={imgData} setImgI={setImgI} setShowImg={setShowImg} />
      {showImg && <PortfolioPopup setImgI={setImgI} imgI={imgI} imgData={imgData} setShowImg={setShowImg} />}
    </div>
  );
}
