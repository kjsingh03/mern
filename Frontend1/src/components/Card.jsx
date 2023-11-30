import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Card({img,brand,handleClick,id,price,name,category}){
    
    return(
        <>
        
        <div onClick={() => handleClick(id)} className="flex flex-col h-[72vw] md:h-[40vw] -z-0 lg:h-[30vw] max-w-[60vw] md:max-w-[50vw] w-full text-[2.5vw] md:text-[1.4vw] lg:text-[1vw] cursor-pointer">
            <div className='h-[65%] lg:h-[60%] w-full overflow-hidden'>
                <img src={img} className="w-full h-full object-fill hover:scale-[1.2] transition duration-[600ms]"/>
            </div>
            <div className='h-[32%] py-[2vw] md:py-[.8vw] flex flex-col justify-between'>
                <p className="text-[#852c2c] text-[4.2vw] md:text-[1.8vw] lg:text-[1.2vw]">{brand}</p>
                <p className="text-gray-700/80">{name}</p>
                <p className="text-gray-700/80">{category}</p>
                <p className=" text-[3.7vw] md:text-[1.8vw] lg:text-[1.2vw] flex items-end gap-[.2vw]">MRP : <span className="font-[1000]">₹</span> {price}</p>
            </div>
        </div>
        
        </>
    )

}