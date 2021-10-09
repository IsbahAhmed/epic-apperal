import { memo, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import img from "../../assets/img/cart/1.jpg"
import { changeQuantity, removeFromCart } from "../../Redux/cartReducer/cartActions"

const CartItemsTable = ({cart}) => {
    return (
        <table className="table">
        <thead>
          <tr>
            <th className="">remove</th>
            <th className="plantmore-product-thumbnail">images</th>
            <th className="cart-product-name">Product</th>
            <th className="plantmore-product-price">Unit Price</th>
            <th className="plantmore-product-quantity">Quantity</th>
            <th className="plantmore-product-subtotal">Total</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((cartItem)=>    <TableListItems key={cartItem.productId} cartItem={cartItem}/>)
          }
     
     
    
        </tbody>
      </table>
    )
}

const TableListItems = ({cartItem})=>{
const {image,name,productId,price,stock,quantity} = cartItem;
const [value,setValue] = useState(quantity);
const dispatch = useDispatch();
useEffect(()=>{
  if(value && value <= stock){
      dispatch(changeQuantity(productId,value))
  }
},[value])

    return (
        <tr>
        <td className="plantmore-product-remove"  onClick={()=> dispatch(removeFromCart(productId))}><i className="fa fa-times"/></td>
        <td className="plantmore-product-thumbnail"><img src={image} alt="" /></td>
        <td className="plantmore-product-name"><Link to={`/single-product/${productId}`}>{name}</Link></td>
        <td className="plantmore-product-price"><span className="amount">Rs {price}</span></td>
        <td className="plantmore-product-quantity">
          <input min={1} max={stock} value={value} onChange={(e)=> setValue(e.target.value)} type="number" />
        </td>
        <td className="product-subtotal"><span className="amount">Rs {price * value}</span></td>
      </tr>
    )
}


export default memo(CartItemsTable)

