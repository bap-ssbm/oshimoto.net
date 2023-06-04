import { FC } from 'react'
import SocialIcons from '../ui/SocialIcons'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Link from 'next/link'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
interface HeroProps {
}
const Hero: FC<HeroProps> = ({ }) => {
    return (
        <div className='min-h-screen relative'>
            <div className='relative'>
                <video className='object-cover lg:w-full right-0 opacity-70 min-h-screen' autoPlay  playsInline muted loop preload='auto'>
                    <source src="/video/20230129_CX取材.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute w-full h-screen top-0 bg-opacity-40 z-10 px-[5%] grid place-content-center'>
                    <div className='text-center flex flex-col items-center'>
                        <h1 className='text-[40px] font-Geologica text-center font-bold'>
                            Ryuichi Oshimoto
                        </h1>
                        <p className='text-[20px] mb-8'>
                            Creative Photographer
                        </p>
                        <Link className='border px-5 py-3 duration-500 hover:translate-x-2 flex gap-3 items-center w-fit' href='/portfolio'>
                            View Portfolio <HiOutlineArrowLongRight/>
                        </Link>
                    </div>
                    <div className='absolute bottom-10 w-full px-[5%] flex flex-col md:flex-row gap-5 md:gap-20 justify-end lg:text-[20px]'>
                        <div>
                            <a href='#events' className='flex gap-3 items-center w-fit hover:-translate-y-3 duration-300'>
                                Recent Events <AiOutlineArrowDown/>
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