import { useState } from "react"
import Container from "react-bootstrap/Container";

export default function RegisterForm() {

  const [user, setUser] = useState({});

  console.log(user);
  return (
    <Container>
      <h3>Register</h3>
      <form action="">
        <label htmlFor="username">username</label><br />
        <input type="text" name='username' value={user.username} onChange={(e) => { setUser({...user, username: e.target.value }) }} /><br />
        <label htmlFor="email">email</label><br />
        <input type="text" name='email' value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} /><br />
        <label htmlFor="password">password</label><br />
        <input type="password" name='password' value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /><br />
        <label htmlFor="confirm-password">confirm-password</label><br />
        <input type="text" name='confirm-password' onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }} value={user.confirmPassword} /><br />
        <label htmlFor="first-name">first-name</label><br />
        <input type="text" name='first-name' value={user.firstName} onChange={(e) => { setUser({ ...user, firstName: e.target.value }) }} /><br />
        <label htmlFor="last-name">last-name</label><br />
        <input type="text" name='last-name' value={user.lastName} onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }} /><br />

        <input type="button" name='Register' value='Register' />
      </form>
    </Container>
  )

}

