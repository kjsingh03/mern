import axios from 'axios';
import React, { useEffect, useState } from 'react'
import filter from './filter-circle-svgrepo-com.svg'
import Card from '../components/Card';
import arrow from './arrow-down-sign-to-navigate.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProduct } from '../store/productSlice';

function Shop() {

  var [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  var getProducts = () => {
    axios.get("http://localhost:8080/products")
      .then((res) => setProducts(res.data.products))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getProducts();
  }, [])

  // const filters = () => {

  //   const width = window.innerWidth;
  //   let pl = "15vw";
  //   if(width>=1024)
  //     pl = "15vw";
  //   else if(width>=768 && width<=1024)
  //     pl = "25vw";
  //   else
  //     pl="0vw";

  //   if (document.querySelector(".filters").style.display === "none") {
  //     document.querySelector(".filters").style.display = "block";
  //     document.querySelector(".products").style.paddingLeft = pl;
  //     document.querySelector("#state").style.innerHTML = "Show";
  //   }
  //   else {
  //     document.querySelector(".filters").style.display = "none";
  //     document.querySelector(".products").style.paddingLeft = "0vw";
  //     document.querySelector("#state").style.InnerHTML = "Show";
  //   }

  //   document.querySelector(".shop").style.transition = "all 0.6s";
  // }


  const lowToHigh = ()=>{
      axios.get("http://localhost:8080/products?sort=price&order=1")
      .then( res => setProducts(res.data.products))
      .catch(err => console.log(err))
  }

  const highToLow = ()=>{
    axios.get("http://localhost:8080/products?sort=price&order=-1&page=1")
    .then( res => setProducts(res.data.products))
    .catch(err => console.log(err))
}

  const relevance = ()=>{
    axios.get("http://localhost:8080/products?sort=rating&order=-1")
    .then( res => setProducts(res.data.products))
    .catch(err => console.log(err))
}

  const newest =()=>{
    axios.get("http://localhost:8080/products?sort=createdAt&order=-1")
    .then( res => setProducts(res.data.products))
    .catch(err => console.log(err))
}

  const handleClick = (id)=>{

      axios.get(`http://localhost:8080/products/${id}`)
            .then( res => dispatch(setProduct(res.data.product)))
            .then(()=> navigate("/product"))
            .catch( err => console.log(err));
  }

  return (
    <div className="shop min-h-screen flex flex-col gap-[3vw] w-full">
      <div className="fixed py-[8vw] md:py-[4vw] z-[5] lg:py-[2vw] px-[8vw] lg:px-[3.5vw] w-full max-w-[] flex justify-between  text-[3.5vw] md:text-[2.1vw] lg:text-[1.3vw] ">
        <div className="w-[50%] text-[4.8vw] md:text-[2.6vw] lg:text-[1.9vw]">
          Shoes ({products.length})
        </div>
        <div className='w-[50%] flex justify-end items-center gap-[2.38vw] md:gap-[.5vw] '>
          <div className="md:hidden flex gap-[.4vw] items-start  py-[1vw]">
            <div>Filters</div>
            <div className="w-[3.1vw] md:w-[2.6vw] lg:w-[1.8vw]">
              <img src={filter} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-[.4vw]">
            <div className="dropdown">
              Sort By
              <div className="dropContent w-[24vw] md:w-[15vw] lg:w-[10vw] text-[2.4vw] md:text-[1.3vw] lg:text-[.9vw]">
                <ul>
                <li onClick={newest}>Newest</li>
                <li onClick={relevance}>Featured</li>
                <li onClick={lowToHigh}>Price : Low to High</li>
                <li onClick={highToLow}>Price : High to Low</li>
              </ul></div>
              </div>
            <div className="w-[2.4vw] md:w-[1.4vw] lg:w-[1.1vw]">
              <img src={arrow} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-[24vw] md:py-[11vw] lg:py-[7vw] px-[10vw] md:px-[5vw] lg:px-[3.5vw] gap-[2vw] w-full">
        <div className="filters hidden md:flex gap-[.4vw] items-start z-10 w-[15vw] md:w-[14vw] lg:w-[12vw] py-[1vw] text-[3.4vw] md:text-[2vw] lg:text-[1.4vw] fixed">
          <div className=''>Filters</div>
          <div className="flex w-[5vw] md:w-[2.6vw] md:py-[0vw] lg:w-[1.8vw]">
            <img src={filter} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="products pl-[0vw] md:pl-[25vw] lg:pl-[15vw] place-content-center grid auto-cols-auto gap-[0vw] md:gap-x-[5vw] md:gap-y-[1vw] lg:gap-x-[5.5vw] md:grid-cols-2 lg:grid-cols-3 w-full ">
          {products.map((p) => (
            <Card name={p.name} key={p._id} id={p._id} handleClick={handleClick} category={p.category} price={p.price} brand={p.brand} img={p.thumbnail} />
          ))}
        </div>
        <div className=''>

        </div>
      </div>
    </div>
  )
}

export default Shop
