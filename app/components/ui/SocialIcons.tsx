import { FC } from 'react'
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa"

interface SocialIconsProps {
    big? :true
}

const SocialIcons: FC<SocialIconsProps> = ({ big}) => {
    return (
        <div className={'flex gap-5 md:gap-3 lg:gap-8 xl:gap-12 items-center text-[16px] ' + (big&&'text-[20px] gap-10 md:gap-10 md:text-[25px]')} >
            <a className='hover:scale-110 transition duration-300' href='https://twitter.com/RyuichiOshimoto'>
                <BsTwitter />
            </a>
            <a className='hover:scale-110 transition duration-300' href='https://www.instagram.com/ryuichi_oshimoto_official/'>
                <AiOutlineInstagram />
            </a>
            <a className='hover:scale-110 transition duration-300' href='https://www.facebook.com/RyuOshimoto/'>
                <FaFacebookF />
            </a>
            <a className='hover:scale-110 transition duration-300' href='https://www.youtube.com/@2865RO'>
                <AiFillYoutube />
            </a>
            <a className='hover:scale-110 transition duration-300' href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ryuoshimoto@gmail.com'>
                <AiOutlineMail />
            </a>

        </div>
    )
}

export default SocialIcons