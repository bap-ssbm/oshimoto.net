import { FC } from 'react'
import {BiLoaderAlt} from 'react-icons/bi'

interface loadingProps {

}

const loading: FC<loadingProps> = ({ }) => {
  return (
    <div className='bg-black w-screen h-screen absolute top-0 left-0 grid place-items-center'>
      <BiLoaderAlt className='animate-spin'/>
    </div>
  )
}

export default loading