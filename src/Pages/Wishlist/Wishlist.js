import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import MyButton from '../../Components/MyButton/MyButton'

const Wishlist = () => {
    return (
        <div>
            <Breadcrumb>
         
  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
  <li className="breadcrumb-item active">Wishlist</li>


            </Breadcrumb>
          <div className="content-wraper py-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
       
          <div className=" table-content table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="">remove</th>
                  <th className="plantmore-product-thumbnail">images</th>
                  <th className="cart-product-name">Product</th>
                  <th className="plantmore-product-price">Unit Price</th>
                  <th className="plantmore-product-stock-status">Stock Status</th>
                  <th className="plantmore-product-add-cart">add to cart</th>
                </tr>
              </thead>
              <tbody>
             <TableListItem/>
             
              </tbody>
            </table>
          </div>
   
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

const TableListItem = ()=>{
    return (
        <tr>
        <td className="plantmore-product-remove"><i className="fa fa-times" /></td>
        <td className="plantmore-product-thumbnail"><img alt src="img/cart/3.jpg" /></td>
        <td className="plantmore-product-name">Sit voluptatem</td>
        <td className="plantmore-product-price"><span className="amount">$40.19</span></td>
        <td className="plantmore-product-stock-status"><span className="out-stock">out stock</span></td>
        <td className="plantmore-product-add-cart">
            <MyButton className="btn-secendory">
            Add to cart
            </MyButton>
        </td>
      </tr>
    )
}

export default Wishlist
