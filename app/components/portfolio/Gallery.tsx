'use client'

import { FC, useState, useEffect } from 'react'

import { Masonry } from '@mui/lab'

import Image from 'next/image'

import { motion } from 'framer-motion'




interface GalleryProps {
    imgData: {
        src: string,
        cols?: number,
        rows?: number
    }[],
    setImgI: Function,
    setShowImg: Function
}

const Gallery: FC<GalleryProps> = ({ imgData, setImgI, setShowImg }: GalleryProps) => {
   
    const [numCol, setNumCol] = useState<number>(0)

    function handleResize() {

        if (window.innerWidth > 1280) {
            setNumCol(4)
        } else if (window.innerWidth > 1024) {
            setNumCol(3)
        } else {
            setNumCol(2)
        }

    }

    useEffect(() => {



        handleResize()

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

    }, [])

    return (
        <Masonry
            columns={numCol}
            spacing={3}>
            {imgData.map((pic, i) => {
                return (
                    <motion.div
                        className='cursor-pointer overflow-hidden'
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: i * 0.35,
                                duration: 0.8
                            }
                        }}
                        onClick={() => {
                            setImgI(i);
                            setShowImg(true);
                            document.body.style.overflow = 'hidden';
                        }}
                    >
                        <div className='hover:scale-110  relative  h-auto duration-[2300ms] ease-in hover:grayscale'>
                            <Image
                                height={500}
                                width={500}
                                src={pic.src}
                                priority
                                alt="" />
                        </div>

                    </motion.div>
                )
            })}
        </Masonry>
    )
    
}

export default Gallery