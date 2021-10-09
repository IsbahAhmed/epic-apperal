import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm'
import MyButton from '../../Components/MyButton/MyButton'

const Checkout = () => {
    return (
        <div className="">
            <Breadcrumb>
     
  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
  <li className="breadcrumb-item active">Checkout</li>


            </Breadcrumb>
          <div className="content-wraper py-100">
  <div className="container-fluid">
  
    {/* checkout-area start */}
    <div className="checkout-area">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 offset-xl-1 col-xl-5 col-sm-12">
        <CheckoutForm/>
            </div>
            <div className="col-lg-6  col-xl-5 col-sm-12">
              <div className="checkout-review-order">
              
                  <h3 className="shoping-checkboxt-title">Your order</h3>
                  <table className="checkout-review-order-table">
                    <thead>
                      <tr>
                        <th className="t-product-name">Product</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="t-product-name">Natus erro<strong className="product-quantity">× 1</strong></td>
                        <td className="t-product-price"><span>$97.20</span></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td><span>$97.00</span></td>
                      </tr>
                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>Free shipping</td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td><strong><span>$97.00</span></strong></td>
                      </tr>
                    </tfoot>
                  </table>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* checkout-area end */}
  </div>
</div>

        </div>
    )
}

export default Checkout
