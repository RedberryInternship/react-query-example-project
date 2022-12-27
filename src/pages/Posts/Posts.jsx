import { NewPostFormModal, PostsList } from './components'
import { LoadingScreen, Button } from 'components'
import { usePosts } from './usePosts'

const Posts = () => {
  const { posts, isLoading, showNewPostFormModal, setShowNewPostFormModal } =
    usePosts()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <div className='px-10 w-full min-h-screen p-44 bg-slate-100'>
        <Button
          clickHandler={() => setShowNewPostFormModal(true)}
          classNames='mb-10 lg:mb-20'
          title='+ Add new post'
          type='button'
        />

        {showNewPostFormModal && (
          <NewPostFormModal
            setShowNewPostFormModal={setShowNewPostFormModal}
            showNewPostFormModal={showNewPostFormModal}
          />
        )}

        {posts && <PostsList posts={posts} />}
      </div>
    </>
  )
}

export default Posts
