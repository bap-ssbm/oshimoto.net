import { FC } from 'react'

interface FormInputProps {
  type:string
}

const FormInput: FC<FormInputProps> = ({type}:FormInputProps) => {
  return (
  <input 
  className='py-2 px-4 bg-black text-[15px] border border-b-white'
  placeholder={type}/>)
}

export default FormInput