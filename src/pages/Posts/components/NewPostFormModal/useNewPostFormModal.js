import { useMutation, useQueryClient } from 'react-query'
import { addPost } from 'services'

export const useNewPostFormModal = (setShowNewPostFormModal) => {
  const queryClient = useQueryClient()

  const formInitialValues = {
    title: '',
    body: '',
  }

  const { mutate: submitForm, isLoading } = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      setShowNewPostFormModal(false)
    },
  })

  const submitHandler = (data, { setFieldError }) => {
    submitForm(data, {
      onError: () => {
        setFieldError('title', 'Fetch error')
        setFieldError('body', 'Fetch error')
      },
    })
  }

  return {
    formInitialValues,
    submitHandler,
    isLoading,
  }
}
