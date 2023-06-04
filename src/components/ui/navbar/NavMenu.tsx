'use client'
import { FC } from 'react'
import Link from 'next/link';
import DropDown from './DropDown';
import { usePathname } from 'next/navigation';

interface NavMenuProps {

}
const NavMenu: FC<NavMenuProps> = ({ }) => {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div className='hidden md:flex xl:gap-20 xl:flex-row flex-col gap-8  items-center md:items-end xl:items-center text-[16px]'>
            <div className='flex gap-5 lg:gap-10 xl:gap-16 tracking-[2px] lg:tracking-[3px]  items-center'>
                <Link href="/"><span className={'relative ' + (pathName === '/'?"active-underline":"underline-hover-effect")}  >Home</span></Link>
                <Link href="/portfolio/portraits"><span className={'relative ' + (pathName.includes('/portfolio')?"active-underline":"underline-hover-effect")}  >Portfolio</span></Link>
                <Link href="/about"><span className={'relative ' + (pathName === '/about'?"active-underline":"underline-hover-effect")}  >About</span></Link>
                <Link href="/contact"><span className={'relative ' + (pathName === '/contact'?"active-underline":"underline-hover-effect")} >Contact</span></Link>
            </div>

        </div>
    )
}

export default NavMenu