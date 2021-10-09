import React from 'react'
import { Redirect } from 'react-router'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import LoginForm from '../../Components/LoginForm/LoginForm'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'

const AuthPage = ({user}) => {
    return (
        <div >
       {
         !user ? <>
         <Breadcrumb>
         <li className="breadcrumb-item"><a href="index.html">Home</a></li>
               <li className="breadcrumb-item active">Login and Register</li>
         </Breadcrumb>
<div className="content-wraper my-5">
 <div className="container-fluid">
   <div className="row">
     <div className="col-lg-6 col-md-6 col-sm-12">
       <div className="customer-login-register">
         <div className="under-line">
         <h1>Login</h1>
         </div>
         <div className="login-Register-info">
         <LoginForm/>
         </div>
       </div>
     </div>
     <div className="col-lg-6  col-md-6 col-sm-12">
       <div className="customer-login-register">
       <div className="under-line">
       <h1>Register</h1>
       </div>
         <div className="login-Register-info">
       <RegisterForm/>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>

         </>: <Redirect to={`/user-account/${user._id}`}/>
       }
        </div>
    )
}

export default AuthPage
