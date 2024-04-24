import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import FeedPage from './pages/FeedPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SingleUserPage from './pages/SingleUserPage'
import UsersPage from './pages/UsersPage'

export default function App() {

  const [ user, setUser ] = useState({});

  function updateUser(user){
    setUser(user)
  }

  return (
    <Container fluid className='app'>
      <Header user={user}/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<LandingPage  user={user}/>}/>
        <Route path='/login' element={<LoginPage user={user} updateUser={updateUser}/>}/>
        <Route path='/register' element={<RegisterPage user={user}/>}/>
        <Route path='/users' element={<UsersPage  user={user}/>}/>
        <Route path='/user/:username' element={<SingleUserPage user={user} />}/>
        <Route path='/feed' element={<FeedPage  user={user}/>}/>

      </Routes>



    </Container>
  )

}