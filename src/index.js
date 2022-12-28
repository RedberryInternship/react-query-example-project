import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)
