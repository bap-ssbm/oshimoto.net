export default function PortfolioNav() {
  const pathName = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div className="flex w-full justify-center gap-5 flex-wrap">
      <a href="/portfolio/portraits">
        <span className={'relative ' + (pathName === '/portfolio/portraits' ? 'active-underline' : 'underline-hover-effect')}>
          Portraits
        </span>
      </a>
      /
      <a href="/portfolio/na-landscape">
        <span className={'relative ' + (pathName === '/portfolio/na-landscape' ? 'active-underline' : 'underline-hover-effect')}>
          North American Landscape
        </span>
      </a>
      /
      <a href="/portfolio/jp-landscape">
        <span className={'relative ' + (pathName === '/portfolio/jp-landscape' ? 'active-underline' : 'underline-hover-effect')}>
          Japan Landscape
        </span>
      </a>
    </div>
  );
}
