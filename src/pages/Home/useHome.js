import { useQuery } from 'react-query'
import { getPosts } from 'services'

export const useHome = () => {
  const { isLoading, data: response } = useQuery('posts', getPosts)

  return { posts: response?.data, isLoading }
}
