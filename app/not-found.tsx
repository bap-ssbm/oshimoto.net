import { FC } from 'react'

interface notfoundProps {

}

const Notfound: FC<notfoundProps> = ({ }) => {
  return (
    <div className='w-full text-center min-h-[50vh] grid place-content-center'>
      <h1>
        404 | Not Found
      </h1>
    </div>)
}

export default Notfound