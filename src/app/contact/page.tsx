import ContactImg from '@/components/contact/ContactImg'
import Form from '@/components/contact/Form'
import { FC } from 'react'
interface pageProps {

}
const page: FC<pageProps> = ({ }) => {
  return (
    <div className='px-[6%] pt-[200px] md:flex-row flex-col font-Raleway flex gap-20 max-w-[1400px] min-h-[60vh] mx-auto'>
     <ContactImg/>
      <div className='flex-1 flex flex-col  order-2'>
         <h1 className='text-[25px] font-Nixie-One mb-20'>Get in Touch!</h1>
        
        <Form/>
        <p className='text-lg mt-10 mb-10'>or email me at <a href="mailto:ryuoshimoto@gmail.com" className='underline'>ryuoshimoto@gmail.com</a></p>
      </div>
    </div>
  )
}

export default page