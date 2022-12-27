import { Link } from 'react-router-dom'

const PostsList = ({ posts }) => {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto'>
      {posts?.map((post) => (
        <Link
          className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
          to={`/posts/${post?._id}`}
          key={post?._id}
        >
          <li>
            <div className='flex w-full items-center overflow-x-hidden justify-between space-x-6 p-6'>
              <div className='flex-1'>
                <div className='text-lg break-all font-medium text-gray-900'>
                  <p>{post?.title}</p>
                </div>
                <div className='mt-1 text-base break-all text-gray-500'>
                  {post?.body}
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default PostsList
