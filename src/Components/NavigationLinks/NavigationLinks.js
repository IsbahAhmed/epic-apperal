import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavLinks.css"

const NavigationLinks = () => {
    return (
        <React.Fragment>
              <NavLink to="/">
                <h4>
                HOME
                </h4>
           </NavLink>
         <div className="dp-wrapper">
         <NavLink to="/shop">   
                <h4>
                shop
                </h4>
           </NavLink>
           <div className="nav-dropdown shadow">
                <div className="row">
                    <div className="col-md-4">
                        <h3>
                            men's wear
                        </h3>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Shirts
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Shoes
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Dresses
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>
                            women's wear
                        </h3>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Shirts
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Shoes
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Dresses
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>
                        accessories
                        </h3>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Shirts
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Shoes
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <p>
                                        Dresses
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
         </div>
     
        
           <NavLink to="/about">
                <h4>
                about
                </h4>
           </NavLink>
           <NavLink to="/contact">
                <h4>
                contact
                </h4>
           </NavLink>
        </React.Fragment>
    )
}

export default NavigationLinks
