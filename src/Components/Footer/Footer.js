import React from 'react'
import f1 from "../../assets/img/icon/f-1.png"
import f2 from "../../assets/img/icon/f-2.png"
import f3 from "../../assets/img/icon/f-3.png"
import f4 from "../../assets/img/icon/f-5.png"
import f5 from "../../assets/img/icon/f-6.png";
import p from "../../assets/img/icon/payment.png"
import logo from "../../assets/img/logo/logo.webp"
const Footer = () => {
    return (
  <footer className="footer-area">
  {/* our-service-area  start */}
  <div className="our-service-area">
    <div className="container-fluid">
      <div className="our-service-inner">
        <div className="col-custom">
          <div className="single-service">
            <div className="service-icon">
              <img src={f1} alt="" />
            </div>
            <div className="serivce-cont">
              <h3>Free delivery</h3>
              <p>Free shipping on all order</p>
            </div>
          </div>
        </div>
        <div className="col-custom">
          <div className="single-service">
            <div className="service-icon">
              <img src={f2} alt />
            </div>
            <div className="serivce-cont">
              <h3>Online Support 24/7</h3>
              <p>Support online 24 hours</p>
            </div>
          </div>
        </div>
        <div className="col-custom">
          <div className="single-service">
            <div className="service-icon">
              <img src={f3} alt />
            </div>
            <div className="serivce-cont">
              <h3>Money Return</h3>
              <p>guarantee under 7 days</p>
            </div>
          </div>
        </div>
        <div className="col-custom">
          <div className="single-service">
            <div className="service-icon">
              <img src={f4} alt />
            </div>
            <div className="serivce-cont">
              <h3>Member Discount</h3>
              <p>Onevery order over $130</p>
            </div>
          </div>
        </div>
        <div className="col-custom">
          <div className="single-service">
            <div className="service-icon">
              <img src={f5} alt />
            </div>
            <div className="serivce-cont">
              <h3>SECURE PAYMENT</h3>
              <p>All cards accepted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* our-service-area  end */}
  <div className="footer-top">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="about-us-footer">
            <div className="footer-logo">
              <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className="footer-info">
              <p className="phone">+ (012) 800 456 789</p>
              <p className="desc_footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, odit velit explicabo tempora consequatur animi veritatis dolorum! Excepturi distinctio nisi quis, blanditiis laborum quod, corporis maxime neque eligendi vitae molestiae?</p>
              <div className="social_follow">
                <ul className="social-follow-list">
                  <li className="facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="youtube"><a href="#"><i className="fa fa-youtube" /></a></li>
                  <li className="google"><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li className="instagram"><a href="#"><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="footer-info-inner">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-title">
                  <h3>Products</h3>
                </div>
                <ul>
                  <li><a href="#">Prices drop </a></li>
                  <li><a href="#">New products </a></li>
                  <li><a href="#">Best sales </a></li>
                  <li><a href="#">Stores</a></li>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">My account</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-title">
                  <h3>Our company</h3>
                </div>
                <ul>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Legal Notice</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us </a></li>
                  <li><a href="#">Sitemap</a></li>
                  <li><a href="#">Stores</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-title">
                  <h3>Your account </h3>
                </div>
                <ul>
                  <li><a href="#">Addresses</a></li>
                  <li><a href="#">Credit slips</a></li>
                  <li><a href="#">Orders</a></li>
                  <li><a href="#">Personal info</a></li>
                </ul>
              </div>
              <div className="col-lg-5 offset-xl-1 col-md-6 col-sm-6">
                <div className="footer-title">
                  <h3>Get in touch</h3>
                </div>
                <div className="block-contact-text">
                
                  <p>Call us: <span>(012) 800 456 789-987 </span></p>
                  <p>Email us: <span>demo@gmail.com</span></p>
                </div>
                <div className="time">
                  <h3 className="time-title">Opening time</h3>
                  <div className="time-text">
                    <p>
                      Open: <span>8:00 AM</span> - Close: <span>18:00 PM</span>
                      Saturday - Sunday: Close
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="copyright">Copyright © <a href="#">Epic Apperal</a>. All Rights Reserved</div>
        </div>	
        {/* <div className="col-lg-6 col-md-6">
          <div className="payment"><img alt src={p} /></div>
        </div> */}
      </div>
    </div>
  </div>
</footer>

    )
}

export default Footer
