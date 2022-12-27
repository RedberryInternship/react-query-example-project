import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Posts, NotFound, PostDetails, Home } from 'pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
