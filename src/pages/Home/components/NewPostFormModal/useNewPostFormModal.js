import { useMutation } from 'react-query'
import { addPost } from 'services'

export const useNewPostFormModal = () => {
  const formInitialValues = {
    title: '',
    body: '',
  }

  const { mutate: submitForm } = useMutation(addPost, {
    onSuccess: () => {
      console.log(1)
    },
  })

  const submitHandler = (data) => {
    submitForm({
      ...data,
      id: new Date().toISOString(),
    })
  }

  return { formInitialValues, submitHandler }
}
