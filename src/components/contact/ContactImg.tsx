import { useGsapFadeIn } from '../../hooks/useGsapFadeIn';
import { CONTACT_IMAGE } from '../../data/site-config';

export default function ContactImg() {
  const divRef = useGsapFadeIn(0.8);

  return (
    <div ref={divRef} style={{ opacity: 0 }} className="flex flex-col md:w-[33%] order-[3] md:order-1">
      <div className="pointer-events-none">
        <img
          className="w-full"
          src={CONTACT_IMAGE}
          alt="Ryuichi Oshimoto portrait"
        />
      </div>
    </div>
  );
}
