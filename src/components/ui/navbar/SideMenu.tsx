import { useGsapFadeIn } from '../../../hooks/useGsapFadeIn';
import SocialIcons from '../SocialIcons';

interface SideMenuProps {
  setShowSide: (show: boolean) => void;
}

export default function SideMenu({ setShowSide }: SideMenuProps) {
  const menuRef = useGsapFadeIn(0.5);

  return (
    <div
      ref={menuRef}
      style={{ opacity: 0 }}
      className="md:hidden bg-black-950 py-36 min-h-screen box-border w-screen absolute top-0 left-0 z-[30] px-[5%] flex flex-col items-end gap-10"
    >
      <nav className="flex flex-col text-[20px] gap-5 tracking-[4px] font-[300] text-white text-end" aria-label="Mobile navigation">
        <a href="/" onClick={() => setShowSide(false)}>Home</a>
        <a href="/portfolio/portraits" onClick={() => setShowSide(false)}>Portfolio</a>
        <a href="/about" onClick={() => setShowSide(false)}>About</a>
        <a href="/contact" onClick={() => setShowSide(false)}>Contact</a>
      </nav>
      <SocialIcons />
    </div>
  );
}
