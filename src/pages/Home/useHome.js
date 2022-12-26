import { useQuery } from 'react-query'
import { getPosts } from 'services'
import { useState } from 'react'

export const useHome = () => {
  const [showNewPostFormModal, setShowNewPostFormModal] = useState(false)

  const { isLoading, data: response } = useQuery('posts', getPosts, {
    onSuccess: (response) => {
      setShowNewPostFormModal(false)
      console.log(response?.data)
    },
  })

  return {
    setShowNewPostFormModal,
    showNewPostFormModal,
    posts: response?.data,
    isLoading,
  }
}
