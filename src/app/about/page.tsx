import AboutPgLayout from '@/components/about/AboutPgLayout'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='pt-[200px]'>
            <AboutPgLayout />
        </div>
    )
}
export default page