import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

import './App.css'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import FeaturedMovie from './pages/FeaturedMovie'

import Header from './components/Header'


function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
          setUser(user)
      }
  }, [])


  return (
    <>
      <Router>
          <Header user={user} setUser={setUser} />
          <Routes>
            <Route path='/signup' element={<SignUp user={user} setUser={setUser} />} />
            <Route path='/signin' element={<SignIn user={user} setUser={setUser} />} />
            <Route path='/movie' element={<FeaturedMovie user={user} setUser={setUser} />} />
            <Route path='/' element={<Home user={user} setUser={setUser} />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
