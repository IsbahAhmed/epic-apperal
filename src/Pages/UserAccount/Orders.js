import React from 'react'

const Orders = () => {
    return (
        <div>
        <h3>Orders</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>	 	 	 	
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>May 10, 2018</td>
                <td>Processing</td>
                <td>$25.00 for 1 item </td>
                <td><a className="view" href="cart.html">Download Recipt</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>May 10, 2018</td>
                <td>Processing</td>
                <td>$17.00 for 1 item </td>
                <td><a className="view" href="cart.html">Download Recipt</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Orders
