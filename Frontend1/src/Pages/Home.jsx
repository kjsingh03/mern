import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {

  const navigate=useNavigate();

  return (
    <div className="min-h-[80vh] text-center flex flex-col justify-center items-center gap-[1vw]">
      <h1 className="text-[2vw]">Welcome to my Store</h1>
      <p onClick={()=> navigate("/signup")} className='bg-black text-white border-[.1vw] border-transparent hover:border-[.1vw] hover:border-black p-[1vw] rounded-[2vw] cursor-pointer hover:bg-white hover:text-black' >Kindly Signup first</p>
    </div>
  )
}

export default Home
