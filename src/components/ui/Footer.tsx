'use client'
import { FC } from 'react'
import SocialIcons from './SocialIcons'
import Link from 'next/link'


interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    
    return (
        <div className='px-[10%]  pt-[10%] pb-[5%] flex md:justify-between font-Raleway flex-col md:flex-row gap-10 justify-center'>
            <div className='flex flex-col gap-10'>
                <SocialIcons/>
                <Link href="/contact" className='tracking-[2px]'>
                    Contact Me
                </Link>
            </div>
            <div className='flex flex-col gap-10 order-2 md:text-end'>
                <p>
                    © Ryuichi Oshimoto {new Date().getFullYear()}
                </p>
            </div>
        </div>)
}

export default Footer