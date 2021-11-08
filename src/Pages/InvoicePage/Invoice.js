import React from 'react'
import { Table } from 'react-bootstrap'
import MyButton from '../../Components/MyButton/MyButton'
import "./Invoice.css"
const Invoice = () => {
    return (
        <div className="container py-100">
            <h1 className="text-center mb-5">
                Invoice#1234
            </h1>
            <div className="p-3 inv-wrapper">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Item</th>
      <th>Quantity</th>
      <th>Size</th>
      <th>Color</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Sunglasses</td>
      <td>1</td>
      <td>-</td>
      <td>Black</td>
      <td>1400/-</td>
    </tr>

  </tbody>
</Table>
        <p className="text-right mt-5">
       <b>Shipping</b>: Rs 100
        </p>
        <p className="text-right mt-2">
       <b>Subtotal</b>: Rs 1500
        </p>
        <p className="text-right  mt-2">
       <b>Discount</b>: Rs 100
        </p>
        <p className="text-right  mt-2">
       <b>Total</b>: Rs 1400
        </p>
        <p className="text-right  mt-2">
       <b>Address</b>: Raza corner, 27270 ,<br /> University road , Karachi
        </p>
            </div>
            <div className="d-flex justify-content-center">
            {/* <MyButton className="btn-secendory mt-5">
                Confirm order
            </MyButton> */}
            </div>
        </div>
    )
}

export default Invoice
