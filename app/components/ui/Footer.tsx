'use client'

import { FC } from 'react'


interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    
    return (
        <div className='px-[10%]  pt-[10%] pb-[5%] flex justify-between font-Raleway text-[11px]'>
            <div>
                <p>
                    © Ryuichi Oshimoto
                </p>
                <p>
                    Created By Kentaro Oshimoto
                </p>
            </div>
           
        </div>)
}

export default Footer