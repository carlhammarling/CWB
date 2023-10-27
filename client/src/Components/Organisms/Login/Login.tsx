import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <label htmlFor="">Email:</label>
            <input type='text'></input>
            <label htmlFor="">Password:</label>
            <input type='password'></input>
            <button className='greenButton'><h2>Login</h2></button>
        </form>
    </div>
  )
}

export default Login