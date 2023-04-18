'use client'
import { motion, Variants } from 'framer-motion'
import { FC } from 'react'
import MainImg from './MainImg'

interface MainImgWrapperProps {

}

const wrapperVariants:Variants = {
    initial:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:2.6,
            duration:1.7
        }
    }
}


const MainImgWrapper: FC<MainImgWrapperProps> = ({ }) => {

    

    return (
        <motion.div 
        variants={wrapperVariants}
        initial="initial"
        animate="visible"
        className="absolute  brightness-75">
            <div className="hidden md:flex">
                <MainImg />
                <MainImg />
                <MainImg />
            </div>

            <div className=" hidden md:flex">
                <MainImg />
                <MainImg />
                <MainImg />
            </div>
            <div className='md:hidden '>
            <MainImg />
            </div>

        </motion.div>
    )
}

export default MainImgWrapper