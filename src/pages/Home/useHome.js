import { useQuery } from 'react-query'
import { getPosts } from 'services'
import { useState } from 'react'

export const useHome = () => {
  const [showNewPostFormModal, setShowNewPostFormModal] = useState(false)

  const { isLoading, data: response } = useQuery('posts', getPosts, {
    onSuccess: () => {
      setShowNewPostFormModal(false)
    },
  })

  return {
    setShowNewPostFormModal,
    posts: response?.data,
    showNewPostFormModal,
    isLoading,
  }
}
