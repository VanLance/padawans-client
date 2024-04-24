import Body from '../components/Body'
import LoginForm from '../components/forms/LoginForm'

export default function LoginPage({user, updateUser}) {
  return (
    <Body sidebar={false}>
      <LoginForm user={user} updateUser={updateUser}/>
    </Body>
  )
}
