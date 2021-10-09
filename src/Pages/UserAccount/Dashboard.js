import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div >
        <h3>Dashboard </h3>
        <p>From your account dashboard. you can easily check &amp; view your <Link to="/user-account/123/orders">recent orders</Link> and <Link to="/user-account/123/account-details">edit your password and account details.</Link></p>
      </div>
    )
}

export default Dashboard
