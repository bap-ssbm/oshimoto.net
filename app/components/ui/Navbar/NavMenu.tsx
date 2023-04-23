import { FC } from 'react'
import SocialIcons from '../SocialIcons';
import Link from 'next/link';
import DropDown from './DropDown';


interface NavMenuProps {

}

const NavMenu: FC<NavMenuProps> = ({ }) => {
    return (
        <div className='hidden md:flex xl:gap-20 xl:flex-row flex-col gap-8 items-center md:items-end xl:items-center'>
            <div className='flex  text-sm gap-5 lg:gap-10 xl:gap-16 tracking-[4px] lg:tracking-[6px] font-[300] text-md text-white items-center'>
                <Link href="/"><span className='underline-hover-effect relative' >Home</span></Link>
                <DropDown />
                <Link href="/about"><span className='underline-hover-effect relative' >About</span></Link>
                <Link href="/contact"><span className='underline-hover-effect relative'>Contact</span></Link>
            </div>
            <SocialIcons/>
        </div>
    )
}

export default NavMenu