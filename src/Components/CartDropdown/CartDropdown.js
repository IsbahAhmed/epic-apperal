import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../Redux/cartReducer/cartActions';

import { totalCalculator } from '../../Utility';
import MyButton from '../MyButton/MyButton';
const CartDropdown = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cartItems,shallowEqual);
  
    return (
   <ul className="shopping-cart-wrapper">
     {
       !cart.length ? <h2 className="text-center" style={{padding:"70px 0"}}>No items in cart</h2>:<>

{
  cart.map((product)=>   <li key={product.productId}>
  <div className="shoping-cart-image">
    <Link to={`/single-product/${product.productId}`}>
      <img src={product.image} alt="" />
      <span className="product-quantity">{product.quantity}x</span>
    </Link>
  </div>
  <div className="shoping-product-details">
    <h3><Link to={`/single-product/${product.productId}`}>
      {product.name}
      </Link></h3>
    <div className="price-box">
      <span>Rs{product.price}</span>
    </div>
    <div className="sizeandcolor">
    {
      product.customAttributes.size ?   <span>Size: {product.customAttributes.size}</span> : null
    }
      {
      product.customAttributes.color ?   <span>Color: {product.customAttributes.color}</span> : null
    }
    
    </div>
    <div className="remove" onClick={()=> dispatch(removeFromCart(product.productId))}>
      <button title="Remove">X</button>
    </div>
  </div>
</li>)
}
 
  <li>
    <div className="cart-subtotals">
      <h5>Subtotal<span className="float-right">Rs{totalCalculator(cart)}</span></h5>
      {/* <h5>Shipping<span className="float-right"> $7.00 </span></h5>
      <h5>Taxes<span className="float-right">$0.00</span></h5>
      <h5> Total<span className="float-right">$705.00</span></h5> */}
    </div>
  </li>
  <li className="shoping-cart-btn">
     <Link to="/checkout">
     <MyButton className="btn-secendory">
        checkout
        </MyButton>
     </Link>
  </li>
       </>
     }
</ul>

    )
}

export default CartDropdown
