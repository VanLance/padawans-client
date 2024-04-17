import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

import Header from './components/Header'
import Posts from './components/Posts'
import Padawans from './components/Padawans'
import RegisterForm from './components/forms/RegisterForm'
import Sidebar from './components/Sidebar'



export default function App() {


  return (
    <Container fluid className='app'>
      <Header />
      <Stack direction='horizontal'>
      <Sidebar />
      <Padawans />

      </Stack>
{/* 
      <RegisterForm />
      <Posts /> */}
    </Container>
  )

}