'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
interface HomepageIMGProps {
  children: React.ReactNode,
  imgURL: string,
  linkTo: string
}

const HomepageIMG = ({ children, imgURL, linkTo }: HomepageIMGProps) => {
  return (

    <Link href={linkTo}>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1,
      transition:{
        delay: 0.4,
        duration: 0.9
      }}}
      viewport={{ once: true }}
      className='overflow-hidden'>


        <div className='relative  w-screen flex justify-center'>
          <div className='overflow-hidden'>
            <div className='hover:scale-110 hover:brightness-50  relative  h-auto duration-[4000ms] ease-in'>
              <div className='pointer-events-none'>
                <Image
                  priority
                  quality={100}
                  width={1400} height={200}
                  src={imgURL}
                  alt={imgURL} />
              </div>

            </div>
          </div>
          <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1,
          transition:{
            delay: 0.9,
            duration: 0.9
          }}}
          viewport={{ once: true }}
          className='absolute md:left-[0] top-[45%] w-full text-center font-Nixie-One tracking-[5px] text-base md:text-xl'>
            <h1>{children}</h1>
          </motion.div>
        </div>

      </motion.div>

    </Link>



  )
}


export default HomepageIMG