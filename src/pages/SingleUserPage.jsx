import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Body from '../components/Body'

import SingleUser from '../components/SingleUser'

export default function SingleUserPage() {

  const [ user, setUser] = useState({})
  const { username } = useParams();
  console.log(username);

  useEffect(()=>{
    (async ()=>{
      await getUserData();
    })()
  },[])

  async function getUserData(){
    const response = await fetch('http://127.0.0.1:5000/user/'.concat(username));
    if (response.ok){
      const userData = await response.json();
      console.log(userData);
      setUser(userData);
    }
  }

  return (
    <Body sidebar>
      <Container>

        <h2>{username}s Page</h2>
        <SingleUser posts={user.posts}/>
      </Container>
    </Body>
  )
}
