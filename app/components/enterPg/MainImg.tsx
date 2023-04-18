import { FC } from 'react'
import Image from 'next/image'

interface MainImgProps {

}

const MainImg: FC<MainImgProps> = ({ }) => {
    return (
        <div className="hover:opacity-0 duration-500 ease-in-out transition">
            <div className="pointer-events-none">
                <Image width={500} height={500} 
                src="https://lh3.googleusercontent.com/TE6y8VWsoptghH58whwtrLIf-z9o73uYJr-XKpRr_hlg4Gq53lPZk93r4BcPYUbN_Pdp_lPZAJ83Z95XVu5oYkDkIMEhyK7tMOyBl3ztqv-PUmXzgRy7v-9R2KVXJ6AnT6wbMB8OAg=w2400" alt="" />
            </div>
        </div>
    )
}

export default MainImg