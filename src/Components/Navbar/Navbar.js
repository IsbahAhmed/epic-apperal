import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink ,useLocation} from 'react-router-dom'
import "./Navbar.css";
import logo from "../../assets/img/logo/logo.webp"

import MobileMenu from '../MobileMenu/MobileMenu';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import CartDropdown from '../CartDropdown/CartDropdown';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const location = useLocation()
  const cart = useSelector((state)=> state.cart.cartItems)
  var menuRef = useRef(0)
  var toggleMenuIcon = ()=>{
    menuRef.current.classList.toggle("on");
    if(!show){
      setShow("show")
    }
    else{
      setShow("")
    }
  }
  const [show,setShow] = useState("");
 useEffect(()=>{
  menuRef.current.classList.remove("on");
  setShow("")
 },[location.pathname])
 const user = useSelector((state)=> state.user.user)
    return (
    <>
    <div className="header-custom d-none d-md-block">
      <div className="upper-header-custom ">
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p>
          <i className="fa fa-phone ic" aria-hidden="true"></i>
          (+880) 1910 000251
          </p>
        </div>
        <div className="col-md-8 nav-links-area">
          <NavLink to="/auth">
              <p className="bbb">
              <i className="fa fa-user mr-3" aria-hidden="true"></i>
              My account
              </p>
          </NavLink>
          <NavLink to="/cart">
              <p className="bbb">
              <i className="fa fa-shopping-cart mr-3" aria-hidden="true"></i>
              My cart
              </p>
          </NavLink>
          <NavLink to="/wishlist">
              <p  className="bbb">
              <i className="fa fa-heart mr-3" aria-hidden="true"></i>
              My wishlist
              </p>
          </NavLink>
          <NavLink to="/checkout">
              <p className="">
              <i className="fa fa-usd mr-3" aria-hidden="true"></i>
             Checkout
              </p>
          </NavLink>
          {/* <NavLink to="/auth">
              <p >
             
             {user ?  <> <i className="fa fa-user mr-3" aria-hidden="true"></i>{user.firstName} </> : <><i className="fa fa-lock mr-3" aria-hidden="true"></i> Login</>}
              </p>
          </NavLink> */}
        </div>
      </div>
    </div>
      </div>

    </div>
    
  <div className="mobile-header d-lg-none d-sm-block ">
    <div className="container position-relative">
      <div className="row m-0">
      <div className="col-2 p-0 d-flex justify-content-center align-items-center">
             <Link to="/">
             <img src={logo} alt=""/>
             </Link>
         </div>
         <div className="col-10 p-0 navlinks-area-2">
         
           <div className="search-ico">
            <p className="m-0 ">
            <i className="fa fa-search " aria-hidden="true"></i>
            </p>
           </div>
         <Link to="/cart">
         <div className=" cart-ico">
         <p className="m-0">
         <i className="fa fa-shopping-cart " aria-hidden="true"></i>
         <sup className="cart-number">{cart.length || ""}</sup>
         </p>
         
           </div>
         </Link>
          <div className="menu-toggle-icons position-relative " onClick={toggleMenuIcon} ref={menuRef}>
          <div className="ham-icon">
             <span></span>
             <span></span>
             <span></span>
           </div>
           <div className="cross-icon">
             <i className="fa fa-times"aria-hidden="true"></i>
           </div>
          </div>
         </div>
      </div>
    <MobileMenu show={show} />
    </div>
  </div>
    <div className="lower-header-custom d-lg-block d-none">
     <div className="container">
       <div className="row">
         <div className="col-md-2 d-flex justify-content-center align-items-center">
              <img src={logo} alt=""/>
         </div>
         <div className="col-md-10 navlinks-area-2">
         <NavigationLinks/>
           <div className="search-ico">
            <p className="m-0 ">
            <i className="fa fa-search " aria-hidden="true"></i>
            </p>
           </div>
       <Link to="/cart">
       <div className=" cart-ico">
         <p className="m-0">
         <i className="fa fa-shopping-cart " aria-hidden="true"></i>
         <sup className="cart-number">{cart.length || ""}</sup>
         </p>
         <CartDropdown/>
           </div>
       </Link>
         </div>
       </div>
     </div>
   </div>
    </>

    )
}

export default Navbar
