import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import NavMenu from './NavMenu';
import SideMenu from './SideMenu';

export default function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{ opacity: 0 }}
      className={`w-full flex flex-col gap-5 py-5 md:py-7 px-[5%] items-center fixed top-0 z-50 text-white transition-all duration-500 ${
        scrolled ? 'py-3 md:py-4' : ''
      }`}
      aria-label="Main navigation"
    >
      <div className="flex md:flex-row items-center gap-10 w-full justify-between">
        <a href="/">
          <img
            className={`transition-all duration-500 w-auto ${scrolled ? 'h-6 md:h-8' : 'h-8 md:h-10'}`}
            width={617}
            height={205}
            src="/images/ryuichi oshimoto white.png"
            alt="Ryuichi Oshimoto"
          />
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
