import axios from './axios'

export const getPosts = () => {
  return axios.get('/posts.json')
}

export const addPost = (data) => {
  return axios.post('/posts.json', data)
}
