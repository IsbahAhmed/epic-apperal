import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, useLocation } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import MyButton from '../../Components/MyButton/MyButton'
import { requestLogout } from '../../Redux/userReducer/userActions'
import AccountDetails from './AccountDetails'
import Dashboard from './Dashboard'
import Orders from './Orders';


const UserAccount = ({match:{params:{userID}}}) => {
  
 const user = useSelector((state)=> state.user.user,shallowEqual);
  const dispatch = useDispatch()
if(!user){
  return (
    <Redirect to="/auth"/>
  )
}

 if(user._id !== userID){
   return (
     <Redirect to="/error"/>
   )
 }

    return (
<div className="content-wraper mt-95">
  <div className="container-fluid">
    <div className="account-dashboard mtb-60">
      <div className="dashboard-upper-info">
        <div className="row align-items-center no-gutters">
          <div className="col-lg-3 col-md-12">
            <div className="d-single-info">
              <p className="user-name">Hello <span>{user.firstName + " " + user.lastName}</span></p>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="d-single-info">
              <p>Need Assistance? Customer service at.</p>
              <p>admin@devitems.com.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="d-single-info">
              <p>E-mail them at </p>
              <p>support@yoursite.com</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="d-single-info text-lg-center">
           <Link to="/cart">
           <MyButton className="btn-primary">
            <i className="fa fa-cart-plus mr-3" />view cart
            </MyButton>
           </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-2">
          {/* Nav tabs */}
          <ul className="nav flex-column dashboard-list" role="tablist">
            <li>
                <NavLink  to={`/user-account/${userID}`} activeClassName="active" exact>
              Dashboard
                </NavLink>
            </li>
            <li> 
            <NavLink  to={`/user-account/${userID}/orders`} activeClassName="active" >
              Orders
                </NavLink>
            </li>
          
            <li>  <NavLink  to={`/user-account/${userID}/account-details`} activeClassName="active">
              Account Details
                </NavLink></li>
            <li>
                <Link onClick={()=>{
                  dispatch(requestLogout())
                }}>
                logout
                </Link>
                </li>
          </ul>
        </div>
        <div className="col-md-12 col-lg-10">
   
          <div className="tab-content dashboard-content">
            
            <Switch>
                <Route path="/user-account/:userID" component={Dashboard} exact/>
                <Route path="/user-account/:userID/orders" component={Orders} />
                <Route path="/user-account/:userID/account-details" component={AccountDetails} />
            </Switch>
          
       
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default UserAccount
