import { LoadingScreen, Button, ModalWrapper } from 'components'
import { NewPostFormModal, PostsList } from './components'
import { usePosts } from './usePosts'

const Posts = () => {
  const {
    setShowNewPostFormModal,
    showNewPostFormModal,
    setShowErrorModal,
    showErrorModal,
    isLoading,
    isError,
    posts,
    error,
  } = usePosts()

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

        {isError && (
          <ModalWrapper
            title={`Error: ${error?.code}!`}
            setShow={setShowErrorModal}
            show={showErrorModal}
          >
            <div>{error?.message}</div>
          </ModalWrapper>
        )}
      </div>
    </>
  )
}

export default Posts
