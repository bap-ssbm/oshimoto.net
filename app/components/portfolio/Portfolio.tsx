'use client'

import { FC, useState } from 'react'

import Gallery from './Gallery'


import { AnimatePresence } from 'framer-motion'




import PortfolioPopup from './PortfolioPopup';

interface PortfolioProps {
  imgData: {
    src: string,
    cols?: number,
    rows?: number
  }[]
}

const Portfolio: FC<PortfolioProps> = ({ imgData }: PortfolioProps) => {

  






  const [imgI, setImgI] = useState<number>(0)
  const [showImg, setShowImg] = useState<boolean>(false)

  return (
    <div className='px-[5%] box-border flex justify-center'>
      <Gallery imgData={imgData} setImgI={setImgI} setShowImg={setShowImg}/>
      <AnimatePresence>

        {showImg && <PortfolioPopup setImgI={setImgI} imgI={imgI} imgData={imgData} setShowImg={setShowImg} />}

      </AnimatePresence>
      
    </div>


  )
}

export default Portfolio