import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [ userLogin, setUserLogin ] = useState({ username: '', password: ''});
    const navigate = useNavigate();
    
    console.table(userLogin);

    useEffect(()=>{
        if( userLogin.username ){
            loginUser();
            // setUserLogin({username:'',password:''})
        }
    }, [userLogin])

    async function loginUser(){
        console.log("in login user");
        const res = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userLogin)
        })
        if (res.ok) {
            const data = await res.json();
            console.log(data.access_token);
            navigate('/')
        } else console.error("Failed to Login")
    }

    function handleLoginFormSubmit(e){
        e.preventDefault();
        console.log("form submitted");
        const loginElement = e.currentTarget;
        const loginForm = new FormData(loginElement);

        // console.log(loginForm.get('username'));
        setUserLogin(Object.fromEntries(loginForm));

        loginUser(userLogin);
    }
    
    return (
        <Container>
            <h3>Register</h3>
            <form action="" onSubmit={handleLoginFormSubmit}>
                <label htmlFor="username">username</label><br />
                <input type="text" name='username' required /><br />

                <label htmlFor="password">password</label><br />
                <input type="password" name='password' required /><br />

                <input type="submit" name='Login' value='Login' />
            </form>
        </Container>
    )
}
