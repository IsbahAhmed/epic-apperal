import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import CartItemsTable from '../../Components/CartItemsTable/CartItemsTable'
import MyButton from '../../Components/MyButton/MyButton'
import { totalCalculator } from '../../Utility'
import { useHistory  } from 'react-router'
const CartPage = ({cart}) => {
  const history = useHistory()
    return (
        <div className="cart-page">
            <Breadcrumb>
        
  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
  <li className="breadcrumb-item active">Cart</li>


            </Breadcrumb>
   <div className="content-wraper mt-95">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
     
          <div className="table-content table-responsive">
            <CartItemsTable cart={cart}/>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="coupon-all">
                <div className="coupon">
                  <input id="coupon_code" className="input-text" name="coupon_code" defaultValue placeholder="Coupon code" type="text" />
                  <input className="button" name="apply_coupon" defaultValue="Apply coupon" type="submit" />
                </div>
                <div className="coupon2">
                  <input className="button" name="update_cart" defaultValue="Update cart" type="submit" />
                </div>
              </div>
            </div>
          </div> */}
          <div className="row mb-5">
            <div className="col-md-5 ml-auto">
              <div className="cart-page-total">
                <h2>Cart totals</h2>
                <ul>
                  <li>Subtotal <span>Rs {totalCalculator(cart)}</span></li>
                  {/* <li>Total <span>$170.00</span></li> */}
                </ul>
        
           <MyButton className="btn-primary" onClick={()=> history.push("/checkout")}>
             Proceed to checkout
             </MyButton>
        
              </div>
            </div>
          </div>
     
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
const mapState = (state) => ({
  cart:state.cart.cartItems
})

export default connect(mapState)(CartPage)
