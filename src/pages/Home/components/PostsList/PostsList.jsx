const PostsList = ({ posts }) => {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto'>
      {posts?.map((post) => (
        <li
          className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
          key={post?.id}
        >
          <div className='flex w-full items-center justify-between space-x-6 p-6'>
            <div className='flex-1'>
              <h3 className='text-lg font-medium text-gray-900'>
                {post?.title}
              </h3>
              <p className='mt-1 text-base text-gray-500'>{post?.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PostsList
