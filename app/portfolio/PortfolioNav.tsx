import { FC } from 'react'
import Link from 'next/link'
import '../components/ui/Navbar/navbar.css'

interface PortfolioNavProps {

}

const PortfolioNav: FC<PortfolioNavProps> = ({ }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center font-Raleway tracking-[5px] text-sm gap-10 mt-5'>
      <div className='h-[1px] bg-slate-100 w-[70%] opacity-30' />
      <div className='flex gap-10 '>
        <Link href="/portfolio/portraits">
          <span className=' underline-hover-effect relative' >Portraits</span>
        </Link>
        <Link href="/portfolio/na-travel">
          <span className=' underline-hover-effect relative' > North America</span>
        </Link>
        <Link href="/portfolio/jp-travel">
          <span className=' underline-hover-effect relative' >Japan</span>
        </Link>
      </div>
      <div className='h-[1px] bg-slate-100 w-[70%] opacity-30' />
    </div>)
}

export default PortfolioNav