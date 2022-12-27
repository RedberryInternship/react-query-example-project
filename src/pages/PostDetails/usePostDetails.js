import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getOnePost } from 'services'

export const usePostDetails = () => {
  const { id } = useParams()

  const { data: response, isLoading } = useQuery(['post', id], () =>
    getOnePost(id)
  )

  return {
    postData: response?.data,
    isLoading,
  }
}
