import { FC } from 'react'
import SocialIcons from '../ui/SocialIcons'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Link from 'next/link'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import HeroVideo from './HeroVideo'
import '@/app/styles/top/hero.scss'
interface HeroProps {
}
const Hero: FC<HeroProps> = ({ }) => {
    return (
        <div className='hero min-h-screen relative'>
            <div className='relative'>
                <HeroVideo/>
                <div className='absolute w-full h-screen top-0 bg-opacity-40 z-10 px-[5%] grid place-content-center'>
                    <div className='text-center flex flex-col items-center'>
                        <h1 className='text-[40px] font-Geologica text-center font-bold'>
                            Ryuichi Oshimoto
                        </h1>
                        <p className='text-[20px] mb-8'>
                            Creative Photographer
                        </p>
                        <Link className='border btnAnimation px-5 py-3 flex gap-3 items-center w-fit' href='/portfolio'>
                            View Portfolio <HiOutlineArrowLongRight/>
                        </Link>
                    </div>
                    <div className='absolute bottom-10 w-full px-[5%] flex flex-col md:flex-row gap-5 md:gap-20 justify-end lg:text-[20px]'>
                        <div>
                            <a href='#events' className='dropDown flex gap-3 items-center w-fit'>
                                Recent Events <AiOutlineArrowDown className='svgIcon'/>
                            </a>
                        </div>
                        <SocialIcons big />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero