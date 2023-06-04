'use client'

import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { AiOutlineClose } from "react-icons/ai";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";

interface PortfolioPopupProps {
    setImgI: Function,
    imgI: number,
    setShowImg: Function,
    imgData: {
        id?: number,
        src: string,
        height?: number,
        width?: number
    }[]
}



const PortfolioPopup: FC<PortfolioPopupProps> = ({ setImgI, imgI, setShowImg, imgData }) => {
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{
                opacity:1, transition: {
                    duration: 0.8,
                    ease: 'easeInOut'
                }
            }}
            exit={{
                opacity:0, transition: {
                    duration: 0.8,
                    ease: 'easeInOut'
                }
            }}
            className='fixed w-full h-screen top-0 left-0 z-50 bg-black box-border grid place-items-center'>
            <div className='absolute w-full top-0 p-[5%] flex justify-between'>
                <p className='font-Nixie-One font-bold'>
                    {imgI + 1}/{imgData.length}
                </p>
                <button
                    onClick={() => {
                        setShowImg(false);
                        document.body.style.overflow = 'auto';
                    }}
                    className='text-[20px]'>
                    <AiOutlineClose />
                </button>
            </div>


            <div >
                <AnimatePresence mode='wait'>
                    {<motion.img 
                    key={imgI}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className='max-w-[80vw] max-h-[90vh] pointer-events-none' src={imgData[imgI].src} alt='' />}
                </AnimatePresence>
            </div>

            <button className='absolute md:hover:scale-110 duration-200 border p-2 border-white rounded-full bottom-[50%] right-[5%] text-[25px]'
                onClick={() => {
                    let nextI = imgI + 1;
                    setImgI(nextI === imgData.length ? 0 : nextI)
                }}
            >
                <CgPlayTrackNext className='fill-white' />
            </button>
            <button className='absolute md:hover:scale-110 duration-200 border p-2 border-white rounded-full bottom-[50%] left-[5%] text-[25px]'
                onClick={() => {
                    let nextI = imgI - 1;
                    setImgI(nextI === -1 ? imgData.length - 1 : nextI)
                }}>
                <CgPlayTrackPrev />
            </button>

        </motion.div>
    )
}

export default PortfolioPopup