import { useMutation, useQueryClient } from 'react-query'
import { addPost } from 'services'

export const useNewPostFormModal = (setShowNewPostFormModal) => {
  const queryClient = useQueryClient()

  const formInitialValues = {
    title: '',
    body: '',
  }

  const { mutate: submitForm } = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      setShowNewPostFormModal(false)
    },
  })

  const submitHandler = (data) => {
    submitForm(data)
  }

  return { formInitialValues, submitHandler }
}
