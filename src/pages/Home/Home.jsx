import { NewPostFormModal, LoadingScreen, PostsList } from './components'
import { Button } from 'components'
import { useHome } from './useHome'

const Home = () => {
  const { posts, isLoading, showNewPostFormModal, setShowNewPostFormModal } =
    useHome()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <div className='px-10 w-full p-44 bg-slate-100'>
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

export default Home
