import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home() {

  const [products, setProducts] = useState([]);

  const product = {
    _id: "6554b83a9bf5c263e16766d10",
    name: "iphone1111",
    description: "iphone",
    price: 12000.5,
    discount: 0,
    rating: 0,
    stock: 1,
    brand: "apple",
    category: "smartphone",
    images: [],
    section: "Electronics",
    noOfReviews: [],
    createdAt: "2023-11-20T17:55:17.353Z",
    user: "6558c802568f41f6068bcd03"
}

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:8080/products");
      const products = await res.data.products;
      setProducts(products);
    }
    getProducts();
  },[])

  const addProduct = () =>{
    setProducts([...products,product]);
  }

  return (
    <div className="min-h-screen">
      
    </div>
  )
}

export default Home
