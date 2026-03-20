import type { ReactNode } from 'react';
import { useGsapScrollReveal } from '../../../hooks/useGsapScrollReveal';

interface HomepageIMGProps {
  children: ReactNode;
  imgURL: string;
  linkTo: string;
}

export default function HomepageIMG({ children, imgURL, linkTo }: HomepageIMGProps) {
  const containerRef = useGsapScrollReveal(0.9, 0.4);
  const textRef = useGsapScrollReveal(0.9, 0.9);

  return (
    <a href={linkTo}>
      <div ref={containerRef} style={{ opacity: 0 }} className="overflow-hidden snap-normal snap-center">
        <div className="relative w-screen flex justify-center">
          <div className="overflow-hidden">
            <div className="hover:scale-110 hover:brightness-50 relative h-auto duration-[4000ms] ease-in">
              <div className="pointer-events-none">
                <img
                  loading="eager"
                  width={1400}
                  height={200}
                  src={imgURL}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            ref={textRef}
            style={{ opacity: 0 }}
            className="absolute md:left-[0] top-[45%] w-full text-center tracking-[5px] text-base md:text-xl"
          >
            <h2>{children}</h2>
          </div>
        </div>
      </div>
    </a>
  );
}
