'use client'
import { FC } from 'react'



import Link from 'next/link';
import { motion } from 'framer-motion';
import SocialIcons from '../SocialIcons';

interface SideMenuProps {
    setShowSide: Function
}

const SideMenu: FC<SideMenuProps> = ({ setShowSide }: SideMenuProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            }}
            exit={{ opacity: 0 }}
            className='md:hidden bg-black py-36 min-h-screen box-border w-screen absolute top-0 left-0 z-[30] px-[5%] flex flex-col items-end gap-10'>
            <div className='flex flex-col text-[20px] gap-5 tracking-[4px] font-[300] text-white text-end'>
                <Link href="/" onClick={() => { setShowSide(false) }} >Home</Link>
                <Link href="/portfolio/portraits"><span onClick={() => { setShowSide(false) }} className='relative' >Portfolio</span></Link>
                <Link href="/about"><span onClick={() => { setShowSide(false) }} >About</span></Link>
                <Link href="/contact"><span onClick={() => { setShowSide(false) }}>Contact</span></Link>
            </div>
            <SocialIcons />
        </motion.div>
    )
}

export default SideMenu