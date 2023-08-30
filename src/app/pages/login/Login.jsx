import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email:'',
        password:''
    })

    const handleChange = (e)=>{
        setData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
  return (
    <div className='login' >
        <div className="container">
            <span className="title">Sign in to your account</span>
            <div className="controlls">
                <input onChange={handleChange} placeholder='email' type="email" name="email" id="" />
                <input onChange={handleChange} placeholder='password' type={showPassword? 'text':'password'} name="password" id="" />
                <div className="box">
                    <input checked ={showPassword} onChange={()=>setShowPassword(pre=>!pre)} type="checkbox" className='check' />
                    <span className="forget">Show password</span>
                </div>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login