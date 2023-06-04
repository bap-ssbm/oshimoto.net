import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
interface PortraitsProps {
}
const Portraits: FC<PortraitsProps> = ({ }) => {
    return (
        <div>
            <h1 className='text-[100px] font-serif text-center'>
                PORTRAITS
            </h1>
            <div className='flex gap-10'>
                <div>
                    <Image width={500} height={500}
                        src='https://lh3.googleusercontent.com/qBk5E0g8ma7aDORpifeZeR9fgjQum82rwSl3ja9fT9stWbi-4Tr9xPePphlxa_bChKpBi-Rxy2Ddkt8OfteKXRUQjW1htD37jQMcq4lgnBZkyUGr1oJv1ogYnO9t4Z10a8BPGJblMA=w2400' alt='' />
                </div>
                <div>
                    <Image width={500} height={500}
                        src='https://lh3.googleusercontent.com/qBk5E0g8ma7aDORpifeZeR9fgjQum82rwSl3ja9fT9stWbi-4Tr9xPePphlxa_bChKpBi-Rxy2Ddkt8OfteKXRUQjW1htD37jQMcq4lgnBZkyUGr1oJv1ogYnO9t4Z10a8BPGJblMA=w2400' alt='' />
                </div>
                <div>
                    <Image width={500} height={500}
                        src='https://lh3.googleusercontent.com/qBk5E0g8ma7aDORpifeZeR9fgjQum82rwSl3ja9fT9stWbi-4Tr9xPePphlxa_bChKpBi-Rxy2Ddkt8OfteKXRUQjW1htD37jQMcq4lgnBZkyUGr1oJv1ogYnO9t4Z10a8BPGJblMA=w2400' alt='' />
                </div>
                <div>
                    <Image width={500} height={500}
                        src='https://lh3.googleusercontent.com/qBk5E0g8ma7aDORpifeZeR9fgjQum82rwSl3ja9fT9stWbi-4Tr9xPePphlxa_bChKpBi-Rxy2Ddkt8OfteKXRUQjW1htD37jQMcq4lgnBZkyUGr1oJv1ogYnO9t4Z10a8BPGJblMA=w2400' alt='' />
                </div>
            </div>
            <Link href='/'>
                View More -
            </Link>
        </div>

    )
}

export default Portraits