import React from 'react'
import UserContext from '../Context/UserContext'
import UserContextProvider from '../Context/UserContextProvider'
import { useState, useContext } from 'react'

function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <h2>login</h2>
      <input type="text" 
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      placeholder='username' />
      <input type="text" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
