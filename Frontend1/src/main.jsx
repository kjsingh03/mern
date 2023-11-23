import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Shop from './Pages/Shop.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/product" element={<ProductPage/>} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
)
