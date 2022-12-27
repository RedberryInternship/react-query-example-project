import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { usePostDetails } from './usePostDetails'
import { LoadingScreen } from 'components'
import { Link } from 'react-router-dom'
import { InfoItem } from './components'

const PostDetails = () => {
  const { postData, isLoading } = usePostDetails()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <div className='bg-slate-100 w-full relative h-screen flex flex-col gap-10 items-center justify-center'>
        <Link
          className='text-gray-800 absolute top-10 left-10 flex items-center gap-2'
          to='/posts'
        >
          <ArrowLeftIcon height={20} width={20} strokeWidth={3} />
          <p className='font-semibold text-2xl'>Go to posts list</p>
        </Link>

        <div className='flex flex-col bg-slate-300 p-4 rounded-lg gap-10 items-center justify-center'>
          <InfoItem title={'MongoDb id'} value={postData?._id} />
          <InfoItem title={'Title'} value={postData?.title} />
          <InfoItem title={'Body'} value={postData?.body} />
        </div>
      </div>
    </>
  )
}

export default PostDetails
