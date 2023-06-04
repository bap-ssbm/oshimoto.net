'use client'

import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface MagazineProps {
    english: boolean
}

const Magazine: FC<MagazineProps> = ({ english }) => {
    return (
        <div className='flex flex-col gap-10 md:w-[50%]' >
            <h1 className='font-Nixie-One tracking-[4px]'>-Magazine-</h1>
            <div className='flex flex-col space-x-5'>
                <p className='text-[14px]'>
                    SIGMA</p>
                <AnimatePresence mode='wait'>
                    {
                        english ? (
                            <motion.a
                                key={1}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                exit={{ opacity: 0 }}
                                className='hover:underline duration-300 transition'
                                href='https://www.sigma-global.com/jp/magazine/m_series/oshimoto-photoessay/'>
                                "Ryuichi Oshimoto "The Sights I Encountered" A photo essay in which the photographer describes the sights he encountered in his travels."
                            </motion.a>
                        ) : (
                            <motion.a
                                key={2}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                                exit={{ opacity: 0 }}
                                className='hover:underline duration-300 transition'
                                href='https://www.sigma-global.com/jp/magazine/m_series/oshimoto-photoessay/'>
                                "押本龍一「私の出会う光景」
                                写真家押本龍一が各地を巡り、
                                出会った光景を写真と文章で綴るフォトエッセイ。"
                            </motion.a>
                        )
                    }
                </AnimatePresence>

            </div>
            <div className='flex flex-col space-x-5'>
                <p className='text-[14px]'>
                    デジカメWatch</p>
                <AnimatePresence mode='wait'>
                    {english ? (<motion.a
                        key={1}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.4 } }}
                        exit={{ opacity: 0 }}
                        className='hover:underline duration-300 transition'
                        href='https://dc.watch.impress.co.jp/cda/dialy/2007/06/27/6526.html'>
                        Digital Photo Diary in USA on dc.watch.impress.co.
                    </motion.a>) : (
                        <motion.a
                            key={2}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.4 } }}
                            exit={{ opacity: 0 }}
                            className='hover:underline duration-300 transition'
                            href='https://dc.watch.impress.co.jp/cda/dialy/2007/06/27/6526.html'>
                            押本龍一のUSAデジタルフォト日記　コメディーグループを撮影した
                        </motion.a>)}
                </AnimatePresence>
            </div>

        </div >
    )
}

export default Magazine