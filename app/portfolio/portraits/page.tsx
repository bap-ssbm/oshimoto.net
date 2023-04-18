
import { FC} from 'react'
import { peoplePics } from '../data'

import Portfolio from '@/app/components/portfolio/Portfolio'

interface PortraitsProps {

}

const Portraits: FC<PortraitsProps> = ({ }) => {



  return (
    <Portfolio imgData={peoplePics}/>
  )
}

export default Portraits