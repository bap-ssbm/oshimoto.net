'use client'
import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'
interface PortfolioNavProps {
}
const PortfolioNav: FC<PortfolioNavProps> = ({ }) => {
  const pathName = usePathname();
  return (
    <div className='flex w-full justify-center gap-5 flex-wrap'>
      <Link href='/portfolio/portraits'>
        <span className={'relative ' + (pathName === '/portfolio/portraits' ? "active-underline" : "underline-hover-effect")} >
          Portraits
        </span>
      </Link>
      /
      <Link href='/portfolio/na-landscape'>
        <span className={'relative ' + (pathName === '/portfolio/na-landscape' ? "active-underline" : "underline-hover-effect")} >
          North American Landscape
        </span>
      </Link>
      /
      <Link href='/portfolio/jp-landscape'>
        <span className={'relative ' + (pathName === '/portfolio/jp-landscape' ? "active-underline" : "underline-hover-effect")} >
          Japan Landscape
        </span>
      </Link>
    </div>
  )
}

export default PortfolioNav