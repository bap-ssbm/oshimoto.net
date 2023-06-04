import { FC } from 'react'
import ShowCase from './portfolio/ShowCase'
interface HomePortfolioProps {
}
const HomePortfolio: FC<HomePortfolioProps> = ({ }) => {
    return (
        <section id="portfolio" className='py-[5%] flex flex-col gap-10 md:gap-16 items-center w-full min-h-screen '>
            <div className='font-bold tracking-[2px] text-center'>
                <h1 className='text-[30px] font-Geologica'>
                    Selected Work
                </h1>
                <p className='font-BrandonGrotesque font-medium'>
                    Portraits / Landscape
                </p>
           </div>
            <ShowCase />
        </section>
    )
}

export default HomePortfolio