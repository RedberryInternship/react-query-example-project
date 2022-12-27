import { useParams } from 'react-router-dom'
import { parseErrorMessage } from 'helpers'
import { useQuery } from 'react-query'
import { getOnePost } from 'services'
import { useState } from 'react'

export const usePostDetails = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { id } = useParams()

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery(['post', id], () => getOnePost(id), {
    onError: (error) => {
      const errorMessage = parseErrorMessage(error)
      setErrorMessage(errorMessage)
    },
  })

  return {
    postData: response?.data,
    errorMessage,
    isLoading,
    isError,
  }
}
