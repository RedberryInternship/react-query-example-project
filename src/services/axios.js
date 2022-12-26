import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://posts-api-for-bootcampers-by-saba-var.vercel.app',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use(
  async (response) => {
    // you can modify response if necessary and return modified version
    return response
  },

  async (error) => {
    const status = error?.response?.status

    if (status === 404) {
      // do something
    } else if (status === 403) {
      // do something
    } else if (status === 401) {
      // do something
    }

    return Promise.reject(error)
  }
)

export default instance
