import React,{useContext} from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import {userContext} from '../context/Context'
import { NavLink } from 'react-router-dom'

function Login(){
    const {login,setLogin}=useContext(userContext);

    const handleSubmit =(e)=>{
        e.prevent.default();
    }

  return (
    <div className='login-container'>
        <div className='login-title-container'>
            <h1>Board.</h1>
        </div>
        <div className='login-form-main-container'>
            <div className='login-form-container'>
                <div className='login-heading'>
                    <h2>Sign In</h2>
                    <p>Sign in to your account.</p>
                </div>
                <div className='login-btn-container'>
                    <div className='btn-container'>
                        <GoogleIcon/>
                        <p>Sign in  with google</p>
                    </div>
                    <div className='btn-container'>
                        <AppleIcon/>
                        <p>Sign in  with google</p>
                    </div>
                </div>
                <form className='login-input-box' onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label htmlFor='email'>Email address</label>
                        <input type='mail' placeholder='eg: john123@gmail.com' name='email'/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password'/>
                    </div>
                    <p to='/' className='forgot-text'>Forgot password?</p>
                    <input type='submit' name='signin' value='Sign In' className='signin-btn' onClick={()=>setLogin(true)}/>
                </form>
                <p className='register-link'>Don't have an account? <span className='register-nav-link'>Register here</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login