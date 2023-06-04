import { FC} from 'react'
import {usPics} from '../data'
import Portfolio from '@/components/portfolio/Portfolio'




interface PortraitsProps {

}

const Portraits: FC<PortraitsProps> = ({ }) => {



  return (
    <Portfolio imgData={usPics}/>
  )
}

export default Portraits