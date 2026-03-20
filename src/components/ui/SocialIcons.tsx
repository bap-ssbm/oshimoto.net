import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SOCIAL } from '../../data/site-config';

interface SocialIconsProps {
  big?: boolean;
}

export default function SocialIcons({ big }: SocialIconsProps) {
  return (
    <div
      className={
        'socialIcons flex gap-5 md:gap-3 lg:gap-8 xl:gap-12 items-center ' +
        (big
          ? 'text-[20px] gap-10 md:gap-10 md:text-[25px]'
          : 'text-[25px] md:text-[16px]')
      }
    >
      <a className="hoverAnimation" target="_blank" rel="noopener noreferrer" href={SOCIAL.twitter} aria-label="Twitter">
        <BsTwitter />
      </a>
      <a className="hoverAnimation" target="_blank" rel="noopener noreferrer" href={SOCIAL.instagram} aria-label="Instagram">
        <AiOutlineInstagram />
      </a>
      <a className="hoverAnimation" target="_blank" rel="noopener noreferrer" href={SOCIAL.facebook} aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a className="hoverAnimation" target="_blank" rel="noopener noreferrer" href={SOCIAL.youtube} aria-label="YouTube">
        <AiFillYoutube />
      </a>
      <a className="hoverAnimation" target="_blank" rel="noopener noreferrer" href={SOCIAL.emailLink} aria-label="Email">
        <AiOutlineMail />
      </a>
    </div>
  );
}
