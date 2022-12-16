import React from 'react'
import LoginHeader from '../LoginHeader/LoginHeader'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import './LoginForm.scss'

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser)
  // })
  let errCount = 0
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log('successful signin!')
      navigate('/menu')
    } catch (error) {
      console.log(error.message)
      errCount++;
      if(errCount === 3) {
        console.log("captcha will be here")
      }
    }
  }

  return (
    <>
      <LoginHeader />
      <div id='login-section'>
        <h1>Bejelentkezés</h1>
        <p>jelenlegi felhasználó: {user.email}</p>
        <div className='login-container'>
          <input type='text' placeholder='Felhasználónév' onChange={(event) => {setLoginEmail(event.target.value)}}/>
          <input type='password' placeholder='Jelszó' onChange={(event) => {setLoginPassword(event.target.value)}}/>
          <button onClick={login}>Bejelentkezés</button>
        </div>
        <div>
          <Link to='/registration'>Regisztráció</Link>
        </div>
      </div>
    </>
  )
}

export default LoginForm