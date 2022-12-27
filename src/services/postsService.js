import axios from './axios'

export const getPosts = () => {
  return axios.get('/posts')
}

export const getOnePost = (id) => {
  return axios.get(`/posts/${id}`)
}

export const addPost = (data) => {
  return axios.post('/posts', data)
}
