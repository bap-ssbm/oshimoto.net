'use client'

import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BioProps {
    english: boolean
}

const Bio: FC<BioProps> = ({ english }) => {

    
    return (
        <div className='flex flex-col gap-10'>
           
            <AnimatePresence mode='wait'>
                {english ? (
                <motion.div 
                key={1}
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.4}}}
                exit={{opacity:0}}
                className='leading-10 flex flex-col gap-4'>
                    <p>
                        <strong>Ryuichi Oshimoto</strong> was born and raised in <strong>Japan</strong>, and moved to <strong>New York City</strong> in
                        1984 to pursue his dream of becoming a world-class photographer. </p>
                    <p>
                        After years of working under the tutelage of some of the leaders in the field of commercial
                        photography,
                        he went out on his own in 1991. Ryuichi is presently based in <strong>Los Angeles</strong> and
                        <strong> Hayama-machi, Kanagawa, Japan</strong>
                    </p>
                    <p>
                        He is willing to travel, and looks forward the chance to put the artistry and spiritual energy of
                        his photography to work for you!
                    </p>

                </motion.div>) : (
                    <motion.div 
                    key={2}
                    initial={{opacity:0}}
                    animate={{opacity:1, transition:{duration:0.4}}}
                    exit={{opacity:0}}
                    className='flex flex-col gap-10'>
                        <p>
                            人物、風景、物、被写体にかかわらず、その場の空気感を撮り収め人々と共有したいと思って撮影に望んでいる。
                        </p>
                        <p>
                            東京品川生まれ。82年英語の勉強のため2年の予定で渡米。84年ニューヨークに渡り刺激を受け予定を変更、広告写真スタジオで働き始める。
                            91年フォトグラファーとして独立。95年ニューヨークからロサンゼルスに拠点を移しエンターテインメント関係の撮影中心に活動。
                            2018年から神奈川県葉山町へ拠点を移すも、日本と米国間を行き来している。趣味は山歩き、キャンプ、犬と遊ぶこと。
                        </p>
                    </motion.div>)}
            </AnimatePresence>
        </div>
    )
}

export default Bio