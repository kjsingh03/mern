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
        <div className="footer z-[10] text-[2.8vw] md:text-[1.5vw] lg:text-[.9vw] px-[6vw] h-[80vh] md:h-auto md:px-[12vw] text-gray-800/80 font-medium flex flex-col md:flex-row gap-[4vw] md:gap-[0vw] justify-around">
            <div className="flex flex-row justify-between w-full md:w-[50%] h-[60%] md:h-full">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] p-[2vw] w-[50%]">
                    <h1 className="text-[4vw] md:text-[1.5vw] lg:text-[1vw] text-black/90 font-bold">ONLINE SHOPPING</h1>
                    <div className='flex flex-col gap-[.3vw] cursor-pointer'>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Kids</p>
                        <p>Home & Living</p>
                        <p>Beauty</p>
                        <p>Gift Cards</p>
                    </div>
                    <h1 className="text-[4vw] md:text-[1.5vw] lg:text-[1vw] text-black/90 font-bold">USEFUL LINKS</h1>
                    <div className='flex flex-col gap-[.3vw] cursor-pointer'>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Site Map</p>
                        <p>Corporate Info.</p>
                        <p>Whitehat</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] p-[2vw] w-[50%]">
                    <h1 className="text-[4vw] md:text-[1.5vw] lg:text-[1vw] text-black/90 font-bold">Customer Policies</h1>
                    <div className='flex flex-col gap-[.3vw] cursor-pointer'>
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
            </div>
            <div className="flex flex-row justify-between w-full md:w-[50%] h-[40%] md:h-full">
                <div className="flex flex-col gap-[2vw] md:gap-[1vw] p-[2vw] w-[50%]">
                    <h1 className="text-[4vw] md:text-[1.5vw] lg:text-[1vw] text-black/90 font-bold">EXPERIENCE APP ON MOBILE</h1>
                    <div className="flex md:flex-row gap-[2vw] md:gap-[0.5vw] w-full ">
                        <div className='w-full'>
                            <img src={playStore} className="w-full h-full cursor-pointer object-cover" />
                        </div>
                        <div className='w-full'>
                            <img src={ios} className="w-full h-full cursor-pointer object-cover" />
                        </div>
                    </div>
                    <h1 className="text-[4vw] md:text-[1.5vw] lg:text-[1vw] text-black/90 font-bold">KEEP IN TOUCH</h1>
                    <div className="flex justify-between gap-[2vw] w-full">
                        <div className='w-[13%]'>
                            <img src={facebook} className="w-full h-full cursor-pointer object-cover" />
                        </div>
                        <div className='w-[13%]'>
                            <img src={twitter} className="w-full h-full cursor-pointer object-cover" />
                        </div>
                        <div className='w-[13%]'>
                            <img src={youtube} className="w-full h-full cursor-pointer object-cover" />
                        </div>
                        <div className='w-[13%]'>
                            <img src={instagram} className="w-full h-full cursor-pointer object-cover" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  w-[50%] p-[2vw]">
                    <div className="flex flex-col gap-[1vw] w-full">
                        <div className='w-full items-center flex gap-[2vw] md:gap-[1vw] '>
                            <img src={og100} className="w-[25%] h-[100%] object-cover" />
                            <span className="text-[2vw] md:text-[1.5vw] lg:text-[.9vw]"><span className='text-gray-700/75 font-bold text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>100% Original</span><br />guarantee for all products.</span>
                        </div>
                        <div className='w-full items-center flex gap-[2vw] md:gap-[1vw]'>
                            <img src={day14} className="w-[25%] h-[100%] object-cover" />
                            <span className="text-[2vw] md:text-[1.5vw] lg:text-[.9vw]"><span className='text-gray-700/75 font-bold text-[3vw] md:text-[1.5vw] lg:text-[1vw]'>Return within 14 days</span><br />
                                of receiving your order</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}