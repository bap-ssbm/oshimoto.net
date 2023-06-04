'use client'
import { FC, useEffect } from 'react'

interface HeroVideoProps {

}

const HeroVideo: FC<HeroVideoProps> = ({ }) => {
    useEffect(() => {
        document.querySelector('body')?.addEventListener('touchstart', function () {
            const videoElement = document.getElementById('video') as HTMLVideoElement;
            if (videoElement?.onplaying) {
            }
            else {
                videoElement?.play();
            }
        });
    }, [])
    return (
        <video id='video' className='object-cover lg:w-full right-0 opacity-70 min-h-screen' autoPlay playsInline muted loop preload='auto'>
            <source src="/video/20230129_CX取材.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default HeroVideo