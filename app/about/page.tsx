
import { FC } from 'react'
import Bio from '../components/about/Bio'
import Galleries from '../components/about/Galleries'
import Magazine from '../components/about/Magazine'

import Link from 'next/link'
interface pageProps {

}


const page: FC<pageProps> = ({ }) => {
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
            <h1 className='font-Nixie-One italic'>A Photographer Based in Japan</h1>
          </div>


          <Bio />
        </div>

      </div>
      <hr className='opacity-30' />


      <div className='flex gap-10 md:flex-row flex-col'>
        <Galleries />


        <Magazine />
      </div>


    </main>
  )
}

export default page