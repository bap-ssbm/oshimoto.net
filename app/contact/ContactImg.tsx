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
                    src='https://lh3.googleusercontent.com/iLZ_lAQ0eijIwVKFaD4VcGCFHvW59SimvM7CFaUknlDBGJzdHW8vl6EsJQbKn-nvOr7dxrAbg_Ye0Gpgwg0ob1Rd6D2aLTolsf_lLvCgZDZA1oE6d5iunYWqABilGZmKkKSKBYKslg=w2400'
                    alt='' />
            </div>
        </motion.div>
    )
}

export default ContactImg