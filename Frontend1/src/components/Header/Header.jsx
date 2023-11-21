import React, { useEffect, useState } from "react";
import logo from "./instagram-shop-logo-design_23-2149750724-removebg-preview.png";
import profile from "./profile.svg";
import wishlist from "./wishlist.svg";
import bag from "./bag-smile.svg";
import search from "./search.svg";
import axios from "axios";

export default function Header() {

    const [products, setProducts] = useState([]);
    const [sections, setSections] = useState([{ name: "Men" }, { name: "Women" }, { name: "Beauty" }, { name: "Electronics" }]);
    // const [categories, setCategories] = useState([{ section: "Men", name: ["Upperwear", "Bottomwear", "Nightwear"] }, { section: "Women", name: ["Upperwear", "Bottomwear", "Nightwear"] }, { section: "Electonics", name: ["Laptops", "Smartphones"] }, { section: "Beauty", name: ["Skincare", "Makeup", "Haircare", "Fragrances"] }]);


    const getProducts = async () => {
        const res = await axios.get('https://dummyjson.com/products');
        const data = await res.data;
        setProducts(data.products);
        console.log(data.products)
    }

    useEffect(() => {
        getProducts();
    }, []);



    return (
        <nav className="flex justify-between py-[1.2vw] md:pt-[1.2vw] px-[1.5vw] md:px-[3vw] items-center w-full text-[1.8vw] md:text-[1.5vw] lg:text-[1vw] font-semibold text-black/90">
            <div className="w-[8%] md:w-[4.5%] lg:w-[3.2%]">
                <img src={logo} className="h-full w-full object-cover" />
            </div>
            <div className="flex items:around w-[54%] md:w-[38%]  text-[2.5vw] md:text-[1.7vw] lg:text-[1.07vw] font-semibold">
                {sections && sections.map((section) => (
                    <div className="dropdown  hover:font-bold" key={section.name}>
                        <div className="dropBtn px-[2vw]">{section.name}</div>
                        <div className="dropContent">

                            <div className="w-[11vw] py-[1.2vw]">
                                <h1>name</h1>
                                <ul>
                                    <li>example1</li>
                                    <li>example2</li>
                                    <li>example3</li>
                                    <li>example4</li>
                                    <li>example5</li>
                                </ul>
                            </div>
                            <div className="w-[11vw] py-[1.2vw]">
                                <h1>name</h1>
                                <ul>
                                    <li>example1</li>
                                    <li>example2</li>
                                    <li>example3</li>
                                    <li>example4</li>
                                    <li>example5</li>
                                </ul>
                            </div>
                            <div className="w-[11vw] py-[1.2vw]">
                                <h1>name</h1>
                                <ul>
                                    <li>example1</li>
                                    <li>example2</li>
                                    <li>example3</li>
                                    <li>example4</li>
                                    <li>example5</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden md:flex w-[12%] md:w-[15%] lg:w-[30%] rounded-[.5vw] items-center justify-center lg:gap-[1vw] lg:border-[.05vw] lg:p-[.5vw] border-gray-400/60">
                <div className="w-[25%] md:w-[15%] lg:w-[4%] flex flex-col items-center">
                    <img src={search} className="hidden md:block h-full w-full object-cover" />
                </div>
                <input
                    type="search"
                    className="hidden lg:block  w-full px-[1vw] font-normal lg:text-[1.06vw] border-none outline-none"
                    placeholder="Search for products, brands & more"
                />
                <input
                    type="search"
                    className="hidden md:block lg:hidden w-full px-[1vw] font-normal lg:text-[1.06vw] border-none outline-none"
                    placeholder="Search"
                />
            </div>
            <div className="flex items-center justify-end w-[32%] md:w-[20%] lg:w-[15%] gap-[5vw] lg:gap-[3vw] ">
                <button className="w-[12%] flex flex-col items-center">
                    <img src={profile} className="h-full w-full object-cover" />
                    <p>Profile</p>
                </button>
                <button className="w-[12%] flex flex-col items-center">
                    <img src={wishlist} className="h-full w-full object-cover" />
                    <p>Wishlist</p>
                </button>
                <button className="w-[12%] flex flex-col items-center">
                    <img src={bag} className="h-full w-full object-cover" />
                    <p>Bag</p>
                </button>
            </div>
        </nav>
    )
}
