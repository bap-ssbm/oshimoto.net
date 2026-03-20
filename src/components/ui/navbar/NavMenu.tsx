export default function NavMenu() {
  // Get current path from window.location in the browser
  const pathName = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div className="hidden md:flex xl:gap-20 xl:flex-row flex-col gap-8 items-center md:items-end xl:items-center text-[16px]">
      <div className="flex gap-5 lg:gap-10 xl:gap-16 tracking-[2px] lg:tracking-[3px] items-center">
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
        <a href="/contact">
          <span className={'relative ' + (pathName === '/contact' ? 'active-underline' : 'underline-hover-effect')}>
            Contact
          </span>
        </a>
      </div>
    </div>
  );
}
