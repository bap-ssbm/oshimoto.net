
'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import './navbar.css'

import './Hamburg.css'

import NavMenu from './NavMenu';
import SideMenu from './SideMenu';

import { motion, Variants, AnimatePresence } from 'framer-motion';

const navVariant: Variants = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {

    const [showSide, setShowSide] = useState<Boolean>(false)
    return (
        <motion.nav className='w-full flex flex-col gap-5 pt-10 pb-12 md:pt-20 md:pb-36 px-[5%] items-center relative z-[10] '
            variants={navVariant}
            initial='initial'
            animate='visible'
        >
            <div className='flex md:flex-row items-center gap-10 w-full justify-between'>
                <Link href="/">
                    <img className='h-20' src='/images/ryuichi oshimoto white.png' alt='logo' />
                </Link>
                <button
                    onClick={() => {
                        setShowSide(!showSide)
                    }}
                    className='flex md:hidden text-[20px] relative z-50'>
                    <div id="nav-icon4" className={showSide && 'open'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <NavMenu />
                <AnimatePresence>
                    {showSide && <SideMenu setShowSide={setShowSide} />}
                </AnimatePresence>

            </div>


        </motion.nav>
    )
}

export default Navbar