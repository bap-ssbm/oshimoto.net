import { useState } from 'react';
import { useGsapFadeIn } from '../../../hooks/useGsapFadeIn';
import NavMenu from './NavMenu';
import SideMenu from './SideMenu';

export default function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const navRef = useGsapFadeIn(0.8);

  return (
    <nav
      ref={navRef}
      style={{ opacity: 0 }}
      className="w-full flex flex-col gap-5 py-7 px-[5%] items-center fixed top-0 z-50 text-white"
      aria-label="Main navigation"
    >
      <div className="flex md:flex-row items-center gap-10 w-full justify-between">
        <a href="/">
          <img className="h-16 md:h-20" height={80} src="/images/ryuichi oshimoto white.png" alt="Ryuichi Oshimoto" />
        </a>
        <button
          onClick={() => setShowSide(!showSide)}
          className="flex md:hidden text-[20px] relative z-50"
          aria-label="Toggle menu"
          aria-expanded={showSide}
        >
          <div id="nav-icon4" className={showSide ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <NavMenu />
        {showSide && <SideMenu setShowSide={setShowSide} />}
      </div>
    </nav>
  );
}
