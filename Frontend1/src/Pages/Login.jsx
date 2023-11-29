import React, { useState } from 'react'
import img from './pexels-photo-3070918.jpeg'
import Input from '../components/Input.jsx'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8080/auth/login",{
            email:email,
            password:password
        })
            .then( res => {document.querySelector("#err").innerHTML = res.data.message
                navigate("/shop");
        })
            .catch( err => document.querySelector("#err").innerHTML = err.response.data.message);

            setTimeout(()=>{
                document.querySelector("#err").innerHTML = "";
            },2000)

    }
    console.log(email,password)

  return (
      <div className="flex">
        <div className="w-[70%] h-[40vw] overflow-hidden">
            <img src={img} className="w-full h-full object-cover" />
        </div>
        <div className="w-[30%]">
            <form className="flex flex-col gap-[2vw] p-[5vw] font-semibold text-[.9vw]" onSubmit={handleSubmit}>
                <h1 className="text-[1.6vw] font-[1000]">Sign In</h1>
                <div className="flex flex-col gap-[.3vw]">
                    <p>Email address</p>
                    <Input name="email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className="flex flex-col gap-[.3vw]">
                    <p>Password</p>
                    <Input name="password" onChange={e=> setPassword(e.target.value)} value={password} type="password" />
                </div>
                <Button type="submit">
                SIGN IN
                </Button>
                <p id="err"></p>
                <p className="text-center">
                Don't have an account? <span className="underline cursor-pointer"><Link to="/signup">Sign Up</Link></span>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login
