import React from 'react'
import Select from 'react-dropdown-select';

const AccountDetails = () => {
    const options = [
        {
          id: 1,
          name: "Karachi",
          value: "karachi",
        },
        {
          id: 2,
          name: "Islamabad",
          value: "islamabad",
        },
        {
          id: 3,
          name: "Lahore",
          value: "lahore",
        },
      ];
    return (
        <div >
        <h3>Account details </h3>
        <div className="login">
          <div className="login-form-container">
            <div className="account-login-form">
              <form action="#">
              
                
                <label>First Name</label>
                <input name="first-name" type="text" />
                <label>Last Name</label>
                <input name="last-name" type="text" />
                <label>Email</label>
                <input name="email-name" type="text" />
                <label>Street address</label>
                <input type="text" name="street" placeholder="House number and street name" id="" />
                <label>Apt</label>
                <input type="text" name="apt" placeholder="Appartment, suit, unit etc" id="" />
                <label>Town / City</label>
                <select name="" id="" className="w-100">
                    <option value="karachi">Karachi</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="pehsawar">Peshawar</option>
                </select>
                <label>Postal / ZIP</label>
                <input type="number" name="postal" id="" />
                <label>Phone</label>
                <input type="number" name="phone" id="" />
                <span className="custom-checkbox">
                  <input name="newsletter" defaultValue={1} type="checkbox" />
                  <label>Sign up for our newsletter</label>
                </span>
                <div className="button-box">
                  <button type="submit" className="default-btn">save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AccountDetails
