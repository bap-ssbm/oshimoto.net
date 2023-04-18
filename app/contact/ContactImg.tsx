'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface ContactImgProps {

}

const ContactImg: FC<ContactImgProps> = ({ }) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        className='flex flex-col md:w-[33%]  order-[3] md:order-1'>

            <div className='pointer-events-none'>
                <img
                    className='w-full'
                    src='https://lh3.googleusercontent.com/PWAdhnmYw8LbjYczU4rcOyWAeF26_hPGVaI-XErP-hg4LLjG-6ErRxFs3rEr1PWEzx1MlYj0X7iF3P4iKdLV82VLgSXvHGvqkVSNUcoF1cEYPGx6x5CM1ji4KW3f9lwZ0dODXsNsvQ=w2400'
                    alt='' />
            </div>
        </motion.div>
    )
}

export default ContactImg