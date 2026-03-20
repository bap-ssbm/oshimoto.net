import { useEffect } from 'react';

export default function HeroVideo() {
  useEffect(() => {
    const handler = () => {
      const videoElement = document.getElementById('video') as HTMLVideoElement;
      if (videoElement && videoElement.paused) {
        videoElement.play();
      }
    };
    document.body.addEventListener('touchstart', handler, { once: true });
    return () => document.body.removeEventListener('touchstart', handler);
  }, []);

  return (
    <video
      id="video"
      className="object-cover lg:w-full right-0 opacity-70 min-h-screen"
      autoPlay
      playsInline
      muted
      loop
      preload="auto"
      aria-label="Background video showcasing photography work"
    >
      <source src="/video/20230129_CX取材.mp4" type="video/mp4" />
    </video>
  );
}
