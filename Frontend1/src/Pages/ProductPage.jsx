import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductPage(){

    const product = useSelector( state => state.product);

    console.log(product)

    return(
        <>
            <div className="min-h-screen">
                
            </div>
        </>
    )
}