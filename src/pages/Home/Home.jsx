import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-slate-100 justify-center items-center h-screen w-full flex'>
      <Link className='text-gray-800 flex items-center gap-2' to='/posts'>
        <p className='font-semibold text-3xl'>Let's see posts</p>
        <ArrowRightIcon height={30} width={30} strokeWidth={3} />
      </Link>
    </div>
  )
}

export default Home
