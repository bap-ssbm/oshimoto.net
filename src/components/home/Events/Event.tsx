'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useState } from 'react'
interface EventProps {
    date: string,
    name: string,
    place: string,
    pdf?: string,
    img: string
}
const Event: FC<EventProps> = ({ date, name, place, pdf, img }) => {
   
    const [showImg, setShowImg] = useState(false)
    return (
        <div onMouseEnter={() => setShowImg(true)} onMouseLeave={() => setShowImg(false)} className='flex justify-between hover:opacity-75 duration-200  relative'>
            <div className='w-[25%] absolute right-0 bottom-0 translate-y-[50%]'>
                <AnimatePresence>
                    {showImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            exit={{ opacity: 0 }}
                        >
                            <Image className='' src={img} alt='' width={400} height={400} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className='py-6 border-t border-black-600 flex justify-between md:w-[70%] w-full flex-col md:flex-row'>
                <p>
                    {date}
                </p>
                <div className='text-end'>
                    <p>
                        {name}
                    </p>
                    <p>
                        {place}
                    </p>
                    {pdf&&<a href={pdf}  target="_blank" rel="noopener noreferrer">Download PDF</a>}
                </div>
            </div>
        </div>
    )
}

export default Event