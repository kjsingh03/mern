import React ,{useEffect,useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Footer/Footer';

function App() {

  // const getProducts = () => {
  //   axios.get("http://localhost:5000/products")
  //   .then((data) => setProducts(data.data));
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
