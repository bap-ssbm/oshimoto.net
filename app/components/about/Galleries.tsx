import { FC } from 'react'

interface GalleriesProps {

}

const Galleries: FC<GalleriesProps> = ({ }) => {
    return (
        <div className='flex flex-col gap-10 md:w-[50%]'>
            <div>
                <h1 className='font-Nixie-One tracking-[4px]'>-Galleries-</h1>
            </div>
            <ul className='text-[14px] space-y-5'>
                <li>
                    <div className=''>
                        <p className='text-[14px]'>
                            PICTORICO SHOP&GALLERY Omotesando
                        </p>
                        <p>
                            - SIGMA Web掲載10周年記念企画
                        </p>
                    </div>
                </li>
                <li>
                    <div className=''>
                        <p className='text-[14px]'>
                            LUMIX BASE TOKYO
                        </p>
                        <p>-「新たなる光 生まれ変わったアレグリア」</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Galleries