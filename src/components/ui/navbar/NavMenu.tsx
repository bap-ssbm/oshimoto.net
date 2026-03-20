export default function NavMenu() {
  const pathName = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14 text-[13px] tracking-[0.25em]">
      <a href="/">
        <span className={'relative ' + (pathName === '/' ? 'active-underline' : 'underline-hover-effect')}>
          Home
        </span>
      </a>
      <a href="/portfolio/portraits">
        <span className={'relative ' + (pathName.includes('/portfolio') ? 'active-underline' : 'underline-hover-effect')}>
          Portfolio
        </span>
      </a>
      <a href="/about">
        <span className={'relative ' + (pathName === '/about' ? 'active-underline' : 'underline-hover-effect')}>
          About
        </span>
      </a>
      <a
        href="/contact"
        className="ml-2 text-[10px] tracking-[0.3em] uppercase px-4 py-2 border border-gold/30 text-gold/70 hover:bg-gold/10 hover:text-gold transition-all duration-500"
      >
        Inquire
      </a>
    </div>
  );
}
