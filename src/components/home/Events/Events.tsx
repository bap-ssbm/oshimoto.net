import { FC } from 'react'
import Event from './Event'
interface EventsProps {
}
const Events: FC<EventsProps> = ({ }) => {
  return (
    <div >
      <h1 className='text-[30px] mb-10'>
        Recent Exhibitions
      </h1>
      <div>
        <Event
          date='2023/4/28 - 2023/6/8'
          name='「新たなる光 生まれ変わったアレグリア」Part 2'
          place='LUMIX BASE Tokyo'
          img='/images/343767623_245795961252416_9039589037470252456_n.jpg'
          pdf='/pdf/LBTphoto.oshimoto.pdf'
          />
        <Event
          date='2023/1/27 - 2023/3/9'
          name='「新たなる光 生まれ変わったアレグリア」Part 1'
          place='LUMIX BASE Tokyo'
          img='/images/lumix1.jpg' 
          pdf='/pdf/lbtsyasinten.pdf'/>
        <Event
          date='2020/9/4 - 2020/9/15'
          name='Death Valley'
          place='Hayama SPACE AO'
          img='/images/118794216_175452254099088_3660761354886132152_n.jpg' />
      </div>
    </div>
  )
}

export default Events