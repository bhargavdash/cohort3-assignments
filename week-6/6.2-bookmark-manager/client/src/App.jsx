import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Bookmark from './components/Bookmark';
import ErrorPage from './components/ErrorPage';
function App() {
  return <div>
    <header>
      This is the header component
    </header>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/bookmarks' element={<Bookmark />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
    <footer>
      This is the footer component
    </footer>
  </div>
}

export default App;