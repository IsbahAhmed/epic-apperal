import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import ProductsList from '../../Components/ProductsList/ProductsList'
import TitleShowcae from '../../Components/TitleShowcase/TitleShowcae'
import ToastBox from '../../Components/ToastBox/ToastBox'

const Shop = () => {
  

    return (
        <div className="shop-page">
         
            <TitleShowcae>
            <h1>
              SHOP
            </h1>
            <p>
            To give you the tapered feel all day long.

            </p>
            </TitleShowcae>
            <Breadcrumb>
            <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li class="breadcrumb-item active">Shop</li>
            </Breadcrumb>
         <div className="container-fluid py-100" >
         <ProductsList/>
         </div>
      
        </div>
    )
}

export default Shop
