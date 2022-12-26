import { TitleInput, ModalWrapper, TextAreaInput } from './components'
import { Formik, Form } from 'formik'
import { postSchema } from 'schemas'
import { Button } from 'components'

const NewPostFormModal = (props) => {
  const { setShowNewPostFormModal, showNewPostFormModal } = props

  return (
    <ModalWrapper
      setShowNewPostFormModal={setShowNewPostFormModal}
      showNewPostFormModal={showNewPostFormModal}
    >
      <Formik
        validationSchema={postSchema}
        onSubmit={() => {}}
        initialValues={{
          title: '',
          body: '',
        }}
      >
        <Form className='flex flex-col gap-2 mt-4'>
          <TitleInput name='title' />
          <TextAreaInput name='body' />

          <Button title='Add' type='submit' classNames='h-14 mt-10' />
        </Form>
      </Formik>
    </ModalWrapper>
  )
}

export default NewPostFormModal
