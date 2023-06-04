'use client'
import { FC } from 'react'
import {HiArrowLongUp} from 'react-icons/hi2'


interface UpArrowProps {
  
}

const UpArrow: FC<UpArrowProps> = ({}) => {
  return (
    <button
        className='hover:scale-110 transition duration-500 hover:text-slate-200 px-[10%] pt-16'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}>
        Back To Top <p className='inline-block teext-[20px]'><HiArrowLongUp /></p>
      </button>
  )
}

export default UpArrow