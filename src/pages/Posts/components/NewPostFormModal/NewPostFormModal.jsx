import { useNewPostFormModal } from './useNewPostFormModal'
import { TitleInput, TextAreaInput } from './components'
import { Button, ModalWrapper } from 'components'
import { Formik, Form } from 'formik'
import { postSchema } from 'schemas'

const NewPostFormModal = (props) => {
  const { setShowNewPostFormModal, showNewPostFormModal } = props

  const { formInitialValues, submitHandler, isLoading } = useNewPostFormModal(
    setShowNewPostFormModal
  )

  return (
    <>
      <ModalWrapper
        setShow={setShowNewPostFormModal}
        show={showNewPostFormModal}
        title='Add New Post'
      >
        <Formik
          initialValues={formInitialValues}
          validationSchema={postSchema}
          onSubmit={submitHandler}
        >
          <Form className='flex flex-col gap-2 mt-4'>
            <TitleInput name='title' />
            <TextAreaInput name='body' />

            <Button
              classNames='h-14 mt-10'
              disabled={isLoading}
              type='submit'
              title='Add'
            />
          </Form>
        </Formik>
      </ModalWrapper>
    </>
  )
}

export default NewPostFormModal
