import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <div className="py-[3vw]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
