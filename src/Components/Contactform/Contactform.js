import React from 'react'
import MyButton from '../MyButton/MyButton'

const Contactform = () => {
    return (
        <form id="contact-form" >
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <input type="text" placeholder="First name*" name="name" required/>
              </div>
              <div className="col-md-6 col-lg-6">
                <input type="text" placeholder="Last name*" name="lastname" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <input type="email" placeholder="Email*" name="email" required/>
              </div>
              <div className="col-md-6 col-lg-6">
                <input type="text" placeholder="Subject*" name="subject" required/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea placeholder="Message *" name="message" defaultValue={""} required/>
              </div>
            </div>
            <div className="contact-submit-btn">
            <MyButton className="btn-secendory">
                Submit
            </MyButton>
            </div>
          </form>
    )
}

export default Contactform
