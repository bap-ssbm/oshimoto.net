'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import ReCAPTCHA from "react-google-recaptcha";
import { BiLoaderAlt } from 'react-icons/bi'




interface FormProps {

}



const Form: FC<FormProps> = ({ }) => {


  const [msg, setmsg] = useState<string|null>()
  
  const [isLoading, setIsLoading] = useState<Boolean>(false)



  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const [captchaComplete, setCaptchaComplete] = useState<boolean>(false)
  const captchaChange = () => {
    setCaptchaComplete(true)
  }

  const catchName = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  const catchEmail = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  const catchSubject = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setSubject(e.target.value)
  }
  const catchMessasge = (e : React.ChangeEvent<HTMLTextAreaElement>)=>{
    setMessage(e.target.value)
  }


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(captchaComplete){
      let data={
      name: name,
      message: message,
      email: email,
      subject: subject
    }
    console.log(data)
    setIsLoading(true)
    await fetch("api/contact", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(data)
    }).then((res)=>{
      
      if(res.status===200){
        setmsg("Message sent!")
        setIsLoading(false);
        setMessage("")
        setSubject("")
      }else{
        setIsLoading(false);
        setmsg("Something went wrong please try again!")
      }
    })
  }else{
    setmsg("Please complete ReCAPTCHA first")
  }

    setIsLoading(false);
  }
  return (
    <motion.form
    initial={{opacity:0}}
    animate={{opacity:1}}
      onSubmit={onSubmit}
      className='flex flex-col gap-7'>

      <input
        className='bg-black border border-white opacity-50 focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest text-white font-Raleway transition duration-300'
        onChange={catchName}
        value={name}
        type='text'
        name='name'
        placeholder='Name'
        required
      />
      <input
        className='bg-black border border-white opacity-50 focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest text-white font-Raleway transition duration-300'
        onChange={catchEmail}
        value={email}
        type='email'
        name='email'
        placeholder='Email'
        required
      />
      <input
        className='bg-black border border-white opacity-50 focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest text-white font-Raleway transition duration-300'
        onChange={catchSubject}
        value={subject}
        type='text'
        name='subject'
        placeholder='Subject'
        required
      />
      <TextareaAutosize
        placeholder='Message'
        value={message}
        onChange={catchMessasge}
        name='message'
        className='bg-black border border-white opacity-50 focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest text-white font-Raleway transition duration-300'
        minRows={5}
        required
      />
         <ReCAPTCHA
        sitekey="6LfMpJklAAAAADeaKJSsTQwVwC3PIVkUB8B3Yrcg"
        onChange={captchaChange}
        onExpired={()=>setCaptchaComplete(false)}
      />
      <button className='w-fit px-7 py-3 tracking-[4px] border border-white opacity-40 hover:opacity-100 transition duration-300'>
        {isLoading ? (<BiLoaderAlt className='animate-spin' />) : ("SEND")}
      </button>
      {msg&&<p className='tracking-[2px] text-[18px]'>{msg}</p>}
    </motion.form>
  )
}

export default Form