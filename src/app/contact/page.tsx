import ContactImg from '@/components/contact/ContactImg'
import Form from '@/components/contact/Form'
import { FC } from 'react'
interface pageProps {

}
const page: FC<pageProps> = ({ }) => {
  return (
    <div className='px-[6%] pt-[200px] md:flex-row flex-col font-Raleway flex gap-20 max-w-[1400px] min-h-[60vh] mx-auto'>
     <ContactImg/>
      <div className='flex-1 flex flex-col gap-24 order-2'>
         <h1 className='text-[25px] font-Nixie-One'>Get in Touch!</h1>
        <Form/>
      </div>
    </div>
  )
}

export default page