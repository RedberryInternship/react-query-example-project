import { useHome } from './useHome'

const Home = () => {
  const { posts, isLoading } = useHome()

  if (isLoading) {
    return (
      <div className='fixed text-gray-800 flex justify-center items-center text-5xl w-screen h-screen bg-gray-800 bg-opacity-30'>
        Loading...
      </div>
    )
  }

  if (posts) {
    return (
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10 mx-auto pt-44 bg-slate-100'>
        {posts?.map((post) => (
          <li
            className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
            key={post?.id}
          >
            <div className='flex w-full items-center justify-between space-x-6 p-6'>
              <div className='flex-1'>
                <h3 className=' text-sm font-medium text-gray-900'>
                  {post?.title}
                </h3>
                <p className='mt-1 text-sm text-gray-500'>{post?.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default Home
