import { BrowserRouter, Routes, Route, Link, Links } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Bookmark from './components/Bookmark';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [lightMode, setLightMode] = useState(false);
  const styles = {
    background: lightMode ? "white" : "black",
    color: lightMode ? "black" : "white"
  }
  
  return <div style={styles}>
    <Header setLightMode={setLightMode} />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/bookmarks' element={<Bookmark />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
    <Footer />
  </div>
}


export default App;