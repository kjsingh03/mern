import React,{useState} from 'react'
import img from './pexels-photo-5827914.jpeg'
import Input from '../components/Input.jsx'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import axios from 'axios'

export default function Signup() {

    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/auth/signup", {
            email: email,
            password: password,
        })
            .then((response) => {
                document.querySelector("#err").innerHTML = response.data.success;
                console.log(response)
            })
            .catch((err) => document.querySelector("#err").innerHTML = (err.response.data.message.split(':')[2]|| err.response.data.message));
            
    }

return (
    <div className="flex mt-[1.3vw]">
        <div className="w-[70%] h-[41vw] overflow-hidden">
            <img src={img} className="w-full h-full object-cover" />
        </div>
        <div className="w-[30%]">
            <form name="myForm" className="flex flex-col gap-[2vw] p-[5vw] font-thin text-[.9vw]" method="post" onSubmit={handleSubmit}>
                <h1 className="text-[1.6vw] font-extrabold">Create an Account</h1>
                <div className="flex flex-col gap-[.3vw]">
                    <p>Email address</p>
                    <Input name="email" value={email} onChange={(e)=> {setEmail(e.target.value);}} />
                </div>
                <div className="flex flex-col gap-[.3vw]">
                    <p>Password</p>
                    <Input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <Button type="submit">Sign Up</Button>
                <p id="err"></p>

                <p className="text-center">
                    Already have an account? <span className="underline cursor-pointer"><Link to="/login">Sign in</Link></span>
                </p>
            </form>
        </div>
    </div>
)
}