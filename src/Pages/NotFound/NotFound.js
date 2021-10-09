import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

const NotFound = () => {
    return (
        <div>
        <div>
      <Breadcrumb>
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Error 404</li>
          
      </Breadcrumb>
        
  <div className="error404">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="search-error-wrapper">
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <p className="home-link">Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
            <form action="#" className="error-form">
              <div className="error-form-input">
                <input type="text" placeholder="Search..." className="error-input-text" />
                <button type="submit" className="error-s-button"><i className="fa fa-search" /></button>
              </div>
            </form>
            <Link to="/" className="home-bacck-button">Back to home page</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default NotFound
