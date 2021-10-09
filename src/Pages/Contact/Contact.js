import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Contactform from '../../Components/Contactform/Contactform'

const Contact = () => {
    return (
        <div>
              <Breadcrumb>
            <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li class="breadcrumb-item active">About</li>
            </Breadcrumb>
          <div className="content-wraper">
  <div className="container-fluid  p-0">
    <div className="row no-gutters">
      <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
        <div className="contact-form-inner">
          <h2>HAVE ANY QUERY?</h2>
        <Contactform/>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12 plr-0">
        <div className="contact-address-area">
          <h2>CONTACT US</h2>
          <p>Do you have a question about our products? Get in touch with us today - we are happy to assist you with anything you need.

</p>
          <ul>
            
            <li>
                <h4>
                <i className="fa fa-envelope-o">&nbsp;</i> Info@epicapperall.com
                </h4>
           </li>
           <li>
                <h4>
                <i className="fa fa-phone">&nbsp;</i> 0324-3242173
                </h4>
           </li>
          </ul>
          <h3>
            Working hours
          </h3>
          <p className="m-0"><strong>Monday – Saturday</strong>: &nbsp;08AM – 22PM</p>
        </div>
      </div>
    </div>
  </div>

</div>

        </div>
    )
}

export default Contact
