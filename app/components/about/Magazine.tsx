import { FC } from 'react'

interface MagazineProps {

}

const Magazine: FC<MagazineProps> = ({ }) => {
    return (
        <div className='flex flex-col gap-10 md:w-[50%]' >
            <h1 className='font-Nixie-One tracking-[4px]'>-Magazine-</h1>
            <div className='flex space-x-5'>
                <p className='text-[14px]'>
                        SIGMA</p>
                <a  
                className='hover:underline duration-300 transition'
                href='https://www.sigma-global.com/jp/magazine/m_series/oshimoto-photoessay/'>
                    "押本龍一「私の出会う光景」
                    写真家押本龍一が各地を巡り、
                    出会った光景を写真と文章で綴るフォトエッセイ。"
                </a>
            </div>

        </div>
    )
}

export default Magazine