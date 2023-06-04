import { FC } from 'react'
import Events from './Events/Events'
interface HomeEventsProps {
}
const HomeEvents: FC<HomeEventsProps> = ({}) => {
  return (
    <section id='events' className='py-[200px] px-[5%] md:px-[10%] flex flex-col justify-center'>
        <div>
          <Events/>
        </div>
    </section>
  )
}
export default HomeEvents