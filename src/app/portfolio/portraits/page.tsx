import { FC} from 'react'
import {peoplePics} from '../data'
import Portfolio from '@/components/portfolio/Portfolio'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return  <Portfolio imgData={peoplePics}/>
}

export default page