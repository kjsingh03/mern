import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import fast from '../assets/SellingFastBadgeV3.avif'

export default function ProductPage() {

    const [size,setSize] = useState('US');
    const [numbers,setNumbers] = useState(['5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10','10.5']);
    const [number,setNumber] = useState('5')

    const setActive = (size) =>{
        setSize(size);
        const sizeName = document.querySelector(`#${size}`);
        // if(sizeName.classList)
        if(sizeName.classList.contains('active')){
            console.log(sizeName.classList)
        }
        else if(!sizeName.classList.contains('active')){
            const activeAll = document.querySelectorAll('.active');
            let i = 0
            while(i<activeAll.length){
            document.querySelector('.active').classList.remove('active');
            i++;
            }

            sizeName.classList.toggle('active')
            console.log(sizeName.classList)
        }
    }

    const product = useSelector(state => state.product);

    // console.log(product)

    return (
        <div className="min-h-screen flex flex-col my-[6vw] md:my-[0vw] md:flex-row w-full px-[10vw] md:px-[0vw]">
            <div className="w-full md:w-[50%] md:pl-[8vw] lg:pl-[12vw] py-[2vw] flex flex-col">
                <div>
                    <p className="text-[5vw] md:text-[1.8vw] p-[.2vw]">{product.name}</p>
                    <p className="text-[4vw] md:text-[1.4vw] p-[.2vw] text-gray-700/80">{product.brand}</p>
                </div>
                <div className="w-full h-[40vw] md:h-[25vw] my-[3vw]">
                    <img src={product.thumbnail} className="h-full w-full object-cover" />
                </div>
            </div>
            <div className='w-full md:w-[40%] p-[4vw] py-[6vw] flex flex-col gap-[4vw] md:gap-[2vw] lg:gap-[1.2vw] '>
                <div className="flex items-center justify-between">
                    <img src={fast} className="w-[15%] h-[15%] md:w-[4vw] md:h-[4vw] object-cover" />
                    <p className="text-[4.5vw] md:text-[1.6vw]">{Math.ceil(Math.random() * 1000)} Sold in last {Math.ceil(Math.random() * 30)} Days!</p>
                </div>
                <div className="flex flex-col gap-[2vw] md:gap-[0vw] border-[.2vw] border-slate-400/50 px-[4vw] pt-[4vw] pb-[1vw] md:px-[1vw] md:pt-[.8vw] md:pb-[0vw]">
                    <div className="sizeDrop relative">
                        <div onClick={()=> document.querySelector(".sizeButton").style.display="block"} className="flex items-center cursor-pointer justify-between border-[.05vw] border-black px-[2vw] py-[1.2vw] md:py-[.4vw]">
                            <div className="">Size:</div>
                            <div className=''>{size} {number} <i className="fa-solid fa-chevron-down"></i></div>
                        </div>
                        <div className="sizeButton absolute w-full" >
                            <div className="sizeHover hidden items-center justify-around py-[2vw] md:py-[.6vw] w-full">
                                <p id="US" className="active w-max cursor-pointer rounded-[50%] p-[1vw] md:p-[.4vw]" onClick={()=>setActive('US')}>US</p>
                                <p id="UK" className="w-max cursor-pointer rounded-[50%] p-[1vw] md:p-[.4vw]" onClick={()=>setActive('UK')}>UK</p>
                                <p id="EU" className="w-max cursor-pointer rounded-[50%] p-[1vw] md:p-[.4vw]" onClick={()=>setActive('EU')}>EU</p>
                                <p id="KR" className="w-max cursor-pointer rounded-[50%] p-[1vw] md:p-[.4vw]" onClick={()=>setActive('KR')}>KR</p>
                            </div>
                            <div className="numberHover hidden grid-cols-3 text-center gap-[2vw] md:gap-[.5vw] py-[.4vw] translate-y-[-.4vw]">
                                {numbers.map( n =>(
                                    <p className='border-[.05vw] cursor-pointer border-black p-[.4vw] hover:bg-slate-300/30' onClick={() => {setNumber(n);document.querySelector(".sizeButton").style.display="none"}} key={n}>{size} {n}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full gap-[.5vw] text-center py-[1vw] text-[4vw] md:text-[1.2vw]">
                        <div className="w-[50%] cursor-pointer md:py-[.8vw] py-[2vw] border-[.05vw] border-black p-[.4vw] hover:bg-black hover:text-white">
                            Place Bid
                        </div>
                        <div className="w-[50%] bg-green-700 hover:bg-green-800 text-white cursor-pointer md:py-[.8vw] py-[2vw] border-[.05vw] border-black p-[.4vw]">
                            Buy for {product.price - Math.ceil(Math.random()*100)}
                        </div>
                    </div>
                    <div className="w-full text-green-700 text-center text-[6vw] md:text-[2.2vw] ">
                        <p>Sell for {product.price + Math.ceil(Math.random()*50)}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col w-[40%] md:w-[25%]">
                        <div className="text-[5vw] md:text-[.9vw]">Last Sale:</div>
                        <div className="text-[6vw] md:text-[2vw] font-bold">₹{(product.price*(1-product.discount/100)).toFixed(2)}</div>
                        <div className="flex items-start gap-[.5vw] text-green-700">
                            <div className="line-through font-bold ">₹{product.price}</div>
                            <div className="">{product.discount}%</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center items-end justify-end gap-[.4vw] w-[70%] text-[4vw] md:text-[1.2vw]">
                        <div className="border-[.05vw] w-[50%] text-center md:-w-[33%] border-black p-[.4vw]">View Asks</div>
                        <div className="border-[.05vw] w-[50%] text-center md:-w-[33%] border-black p-[.4vw]">View Bids</div>
                        <div className="border-[.05vw] w-[50%] text-center md:-w-[33%] border-black p-[.4vw]">View Sales</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="px-[.5vw] text-[1.4vw] fa-solid fa-circle-check"></i>Rockker's Verified
                    </div>
                    <div className="flex items-center">
                        <p className="md:text-[1vw] lg:text-[.8vw] font-thin p-[.2vw] text-gray-700/80">Condition : <span>New</span></p>
                        <i className="px-[.5vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw] fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <div className="flex justify-between ">
                    <div className="flex items-center">
                    <i className="px-[.5vw] text-[1.4vw] fa-solid fa-shield-heart"></i>Our Promise
                    </div>
                    <div className="">
                    <i className="px-[.5vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw] fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}