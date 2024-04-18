import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import FeedPage from './pages/FeedPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SingleUserPage from './pages/SingleUserPage'
import UsersPage from './pages/UsersPage'

export default function App() {

  return (
    <Container fluid className='app'>
      <Header />
      <UsersPage />
    </Container>
  )

}