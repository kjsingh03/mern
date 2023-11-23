import react from 'react';
import facebook from './facebook.svg'
import day14 from './Screenshot 2023-11-19 212256.png'
import twitter from './twitter.svg'
import youtube from './youtube-168.svg'
import playStore from './th.jpeg'
import ios from './app-store-logo.png'
import og100 from './Screenshot 2023-11-19 212127.png'
import instagram from './instagram.svg'

export default function Footer() {

    return (
        <div className="footer text-[.9vw] px-[12vw] text-gray-800/80 font-medium  flex justify-around">
            <div className="flex flex-col gap-[1vw] p-[2vw] w-[25%]">
            <h1 className="text-[.9vw] text-black/90 font-bold">ONLINE SHOPPING</h1>
                <div className='flex flex-col gap-[.3vw] cursor-pointer'>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Home & Living</p>
                    <p>Beauty</p>
                    <p>Gift Cards</p>
                </div>
                <h1 className="text-[1vw] text-black/90 font-bold">USEFUL LINKS</h1>
                <div className='flex flex-col gap-[.3vw] cursor-pointer'>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Site Map</p>
                    <p>Corporate Info.</p>
                    <p>Whitehat</p>
                </div>
            </div>
            <div className="flex flex-col gap-[1vw] p-[2vw] w-[25%]">
                <div className='flex flex-col gap-[.3vw] cursor-pointer'>
                    <h1 className="text-[1vw] text-black/90 font-bold">Customer Policies</h1>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>T&C</p>
                    <p>Terms of Use</p>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Cancellation</p>
                    <p>Returns</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className="flex flex-col gap-[1vw] p-[2vw] w-[25%]">
                <h1 className="text-[1vw] text-black/90 font-bold">EXPERIENCE APP ON MOBILE</h1>
                <div className="flex gap-[2vw] w-[16vw]">
                    <div className='w-full'>
                        <img src={playStore} className="w-full h-full cursor-pointer object-cover" />
                    </div>
                    <div className='w-full'>
                        <img src={ios} className="w-full h-full cursor-pointer object-cover" />
                    </div>
                </div>
                <h1 className="text-[1vw] text-black/90 font-bold">KEEP IN TOUCH</h1>
                <div className="flex gap-[2vw] w-[16vw]">
                    <div className='w-full'>
                        <img src={facebook} className="w-full h-full cursor-pointer object-cover" />
                    </div>
                    <div className='w-full'>
                        <img src={twitter} className="w-full h-full cursor-pointer object-cover" />
                    </div>
                    <div className='w-full'>
                        <img src={youtube} className="w-full h-full cursor-pointer object-cover" />
                    </div>
                    <div className='w-full'>
                        <img src={instagram} className="w-full h-full cursor-pointer object-cover" />
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col gap-[1vw] w-[25%] p-[2vw]">
                <div className="flex flex-col w-full">
                    <div className='w-full items-center flex '>
                        <img src={og100} className="w-[30%] h-[100%] object-cover" />
                        <span><span className='text-gray-700/75 font-bold text-[1vw]'>100% Original</span><br/>guarantee for all products.</span>
                    </div>
                    <div className='w-full items-center flex'>
                        <img src={day14} className="w-[30%] h-[100%] object-cover" />
                        <span><span className='text-gray-700/75 font-bold text-[1vw]'>Return within 14 days</span><br/>
                        of receiving your order</span>
                    </div>
                </div>
            </div>
        </div>
    )
}