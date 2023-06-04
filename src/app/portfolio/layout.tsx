import PortfolioNav from '@/components/portfolio/PortfolioNav'
import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
}

const RootLayout: FC<layoutProps> = ({children}) => {
  return (
    <div className='pt-[100px] md:pt-[200px]'>
        <PortfolioNav/>
        {children}
    </div>
  )
}

export default RootLayout