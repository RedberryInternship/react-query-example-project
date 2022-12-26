import axios from './axios'

export const getQuotes = () => {
  return axios.get('/quotes.json')
}
