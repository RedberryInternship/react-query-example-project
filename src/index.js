import { QueryClient, QueryClientProvider } from 'react-query'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)
