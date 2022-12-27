import { useQuery } from 'react-query'
import { getPosts } from 'services'
import { useState } from 'react'

export const usePosts = () => {
  const [showNewPostFormModal, setShowNewPostFormModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery('posts', getPosts, {
    onSuccess: () => {
      setShowNewPostFormModal(false)
    },

    onError: () => {
      setShowErrorModal(true)
    },
  })

  return {
    setShowNewPostFormModal,
    posts: response?.data,
    showNewPostFormModal,
    setShowErrorModal,
    showErrorModal,
    isLoading,
    isError,
    error,
  }
}
