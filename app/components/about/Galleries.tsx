'use client'

import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface GalleriesProps {
    english: boolean
}

const Galleries: FC<GalleriesProps> = ({ english }) => {
    return (
        <div className='flex flex-col gap-10 md:w-[50%]'>
            <div>
                <h1 className='font-Nixie-One tracking-[4px]'>-Exhibitions-</h1>
            </div>
            <ul className='text-[14px] space-y-5'>
                <li>
                    <div className='space-x-4'>
                        <p className='text-[14px]'>
                            PICTORICO SHOP&GALLERY Omotesando
                        </p>
                        <AnimatePresence mode='wait'>
                            {english ? (<motion.p
                                key={1}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                exit={{ opacity: 0 }}>
                                SIGMA Web 10th Anniversary
                            </motion.p>) :
                                (<motion.p
                                    key={2}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                    exit={{ opacity: 0 }}>
                                    SIGMA Web掲載10周年記念企画
                                </motion.p>)}
                        </AnimatePresence>

                    </div>
                </li>
                <li>
                    <div className='space-x-4'>
                        <p className='text-[14px]'>
                            SPACE AO in Hayama
                        </p>
                        <p>
                        Death valley
                        </p>
                    </div>
                </li>

                <li>
                    <div className='space-x-4'>
                        <p className='text-[14px]'>
                            LUMIX BASE TOKYO
                        </p>
                        <AnimatePresence mode='wait'>
                            {english ?
                                (<motion.p
                                    key={1}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                    exit={{ opacity: 0 }}> Alegría: In A New Light
                                </motion.p>) :
                                (<motion.p
                                    key={2}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                    exit={{ opacity: 0 }}>「新たなる光 生まれ変わったアレグリア」</motion.p>)}
                            <a className='underline ml-3' href='/events/lbtsyasinten.pdf' download>
                                PDF 1
                            </a>
                            <a className='underline ml-3' href='/events/LBTphoto.oshimoto.pdf' download>
                                PDF 2
                            </a>
                        </AnimatePresence>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Galleries
