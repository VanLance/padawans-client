import Container from 'react-bootstrap/Container'
import NavLink from 'react-bootstrap/NavLink'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default function Header(props) {
  return (
    <Navbar data-bs-theme='dark' className='main-heading' sticky='top'>
      <Container>
        <Navbar.Brand>Padawans Portal</Navbar.Brand>
        {
          !props.user.accessToken ?
            <>
              <NavLink as={Link} to={'/register'}>Register</NavLink>
              <NavLink as={Link} to={'/login'}>Login</NavLink>
            </> :
            <NavLink as={Link} to={'/logout'}>Logout</NavLink>
        }
      </Container>
    </Navbar>
  )
}
