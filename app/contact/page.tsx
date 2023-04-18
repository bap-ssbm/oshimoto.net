import { FC } from 'react'
import Form from './Form'
import ContactImg from './ContactImg'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <div className='px-[6%] md:flex-row flex-col font-Raleway flex gap-20 max-w-[1400px] min-h-[60vh] mx-auto'>
     <ContactImg/>
      <div className='flex-1 flex flex-col gap-24 order-2'>
         <h1 className='text-[25px] font-Nixie-One'>Get in Touch!</h1>
        <Form/>
      </div>
    </div>
  )
}

export default page