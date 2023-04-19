'use client'

import { FC } from 'react'
import Link from 'next/link'
import { motion , Variants} from 'framer-motion'
interface MainTitleProps {

}

const wrapperVariants:Variants = {
    initial:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.9
        }
    }
}

const lowerVariants:Variants = {
    initial:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
        
        }
    }
}

const MainTitle: FC<MainTitleProps> = ({ }) => {
    return (
        <motion.div
        variants={wrapperVariants}
        initial="initial"
        animate="visible"
        className="flex justify-center flex-col text-center gap-14 tracking-[5px] relative z-50 pb-28">
            <div className="font-Nixie-One flex flex-col gap-10">
                <motion.div 
                variants={lowerVariants}
                className="text-[30px] flex justify-center">
                    <img className="max-w-[80vw] md:h-32" src="/images/ryuichi oshimoto white.png" />
                </motion.div>
                <motion.h1 
                variants={lowerVariants}
                className='text-xl'>
                    PHOTOGRAPHY
                </motion.h1>
            </div>
            <div>
                <Link href="/portfolio">
                    <motion.button 
                    variants={lowerVariants}
                    className="py-4 px-16 border border-white bg-black rounded-full tracking-[3px] text-[16px]  hover:bg-white bg-opacity-20 hover:text-black hover:scale-110 transition duration-1000 ease-in-out">
                        Enter
                    </motion.button>
                </Link>

            </div>

        </motion.div>
    )
}

export default MainTitle