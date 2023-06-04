import { FC} from 'react'
import {jpPics} from '../data'
import Portfolio from '@/components/portfolio/Portfolio'
interface PortraitsProps {
}
const Portraits: FC<PortraitsProps> = ({}) => {
  return (
    <Portfolio imgData={jpPics}/>
  )
}
export default Portraits