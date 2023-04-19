'use client'
import Galleries from './Galleries'
import Magazine from './Magazine'
import Bio from './Bio'

import { FC, useState } from 'react'

interface AboutPgLayoutProps {

}

const AboutPgLayout: FC<AboutPgLayoutProps> = ({ }) => {
    const [english, setEnglish] = useState(true)
    return (
        <main className='text-[16px] font-Raleway px-[5%] flex gap-20 flex-col max-w-[1300px] mx-auto'>

            <div className=' flex gap-[10%] md:flex-row flex-col'>

                <div className='mb-10 md:mb-0 md:max-w-[30%]'>
                    <img
                        className=''
                        src='https://lh3.googleusercontent.com/tDLwb0sarWZYIjmuBNZoydVKNrieU43rEoWwFYZk7_9_MfJ0auGicNcOjLIxqcj4aIFuj-IZea7nyIsBpHV-7KFNgRq7cIPdqc8m6uo2m5reaqjGAjSBvLi0dxo58WgVvQxCJywpTw=w2400' alt='' />
                </div>

                <div className='md:w-[60vw] leading-10 flex flex-col gap-10'>

                    <div>
                        <h1 className='tracking-[5px] text-[25px]'>押本龍一</h1>
                        <h1 className='font-Nixie-One italic'>An Experienced Japanese Photographer</h1>
                    </div>

                    <div className='text-[14px] flex gap-10 '>
                        <button
                            style={english ? { borderBottom: '1px solid white' } : { opacity: .5 }}
                            onClick={() => setEnglish(true)}
                            className='tracking-[3px] transition duration-300 '>English</button>
                        <button
                            style={!english ? { borderBottom: '1px solid white' } : { opacity: .5 }}
                            onClick={() => setEnglish(false)}
                            className='tracking-[3px] transition duration-300'>日本語</button>
                    </div>
                    <Bio english={english} />
                </div>

            </div>
            <hr className='opacity-30' />


            <div className='flex gap-10 md:flex-row flex-col'>
                <Galleries english={english}/>


                <Magazine english={english} />
            </div>


        </main>
    )
}

export default AboutPgLayout