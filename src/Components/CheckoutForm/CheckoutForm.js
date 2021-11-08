import React from "react";
import MyButton from "../MyButton/MyButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-dropdown-select";
import { placeOrder } from "../../Redux/sagas/orderWatcher/orderApi";
import { ErrorAlert } from "../Alert/Alert";
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
const schema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required("First name is required")
    .min(5, "Minimum 5 letters")
    .max(20, "Maximum 20 letters"),
  lastName: Yup.string()
    .trim()
    .required("Last name is required")
    .min(5, "Minimum 5 letters")
    .max(20, "Maximum 20 letters"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required")
    .max(50, "Maximum 50 letters"),
    streetAddress: Yup.string()
    .trim()
    .required("Street address is required")
    .max(50,"Maximum 50 letters"),
    apt: Yup.string()
    .trim()
    .required("Please enter apt name")
    .max(50,"Maximum 50 letters"),
    postCode:Yup.string()
    .trim()
    .required("Please enter postal code")
    .max(50,"Maximum 50 letters"),
    phone:Yup.string()
    .trim()
   
    .min(10,"Minimum 10 numbers")
    .max(20,"Maximum 20 numbers"),
    orderNotes: Yup.string()
    .trim()
    .min(10,"Minimum 10 letters")
    .max(50,"Maximum 50 letters"),
    // city: Yup.string()
    // .trim().required("Please select city").max(50,"Maximum 50 letters"),
   
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  streetAddress: "",
  apt: "",
  postCode:"",
  phone:"",
  orderNotes:"",
  city:""
};
const CheckoutForm = () => {
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
  const cart = useSelector((state)=> state.cart.cartItems);
  const history = useHistory()
  const handleSubmit = async (orderObj) => {
    if(!orderObj.city) orderObj.city = options[0].value;
    try {
    let products = cart.map(({productId,quantity})=> ({
      product:productId,
      quantity:Number(quantity),
      customAttr:"Regular"
    }))
    orderObj.items = products;
   
     const result = await placeOrder(orderObj);
     if(!result) return ErrorAlert({
      icon: "error",
      title: "<h3>Failed to place order.</h3>",
    })

    history.push("/invoice/asdasdasd")
    } catch (error) {
      console.error(error);
      ErrorAlert({
        icon: "error",
        title: "<h3>Failed to place order.</h3>",
        text: error.message,
      })
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
    
      handleSubmit(values);
      setSubmitting(false)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="checkbox-form">
        <h3 className="shoping-checkboxt-title">Billing Details</h3>
        <div className="row">
          <div className="col-lg-6">
            <p className="single-form-row">
              <label>
                First name <span className="required">*</span>
              </label>
              <input type="text" name="firstName"  {...formik.getFieldProps("firstName")}/>
              {formik.touched.firstName && formik.errors.firstName ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.firstName}</div>
          </div>
        ) : null}
            </p>
          </div>
          <div className="col-lg-6">
            <p className="single-form-row">
              <label>
                Last Name <span className="required">*</span>
              </label>
              <input type="text"  name="lastName"
          {...formik.getFieldProps("lastName")}/>
             {formik.touched.lastName && formik.errors.lastName ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.lastName}</div>
          </div>
        ) : null}
            </p>
          </div>
          <div className="col-lg-12">
            <p className="single-form-row">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" name="email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.email}</div>
          </div>
        ) : null}
            </p>
          </div>
      
          <div className="col-lg-12">
            <p className="single-form-row">
              <label>
                Street address <span className="required">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                placeholder="House number and street name"
                {...formik.getFieldProps("streetAddress")}
              />
                {formik.touched.streetAddress && formik.errors.streetAddress ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.streetAddress}</div>
          </div>
        ) : null}
            </p>
          </div>
          <div className="col-lg-12">
            <p className="single-form-row">
              <input
                type="text"
                name="apt"
                placeholder="Apartment, suite, unit etc. (optional)"
                {...formik.getFieldProps("apt")}
                />
                  {formik.touched.apt && formik.errors.apt ? (
            <div className="fv-plugins-message-container">
              <div className="text-danger">{formik.errors.apt}</div>
            </div>
          ) : null}
            </p>
          </div>
          <div className="col-lg-12">
            <p className="single-form-row">
              <label>
                City <span className="required">*</span>
              </label>
              <Select
                style={{ transition: "all 300ms ease" }}
                color="var(--color-primary)"
                labelField="name"
                valueField="value"
                options={options}
                name="city"
                
              />
               {formik.touched.city && formik.errors.city ? (
            <div className="fv-plugins-message-container">
              <div className="text-danger">{formik.errors.city}</div>
            </div>
          ) : null}
            </p>
          </div>

          <div className="col-lg-12">
            <p className="single-form-row">
              <label>
                Postcode / ZIP <span className="required">*</span>
              </label>
              <input type="text" name="postCode"  {...formik.getFieldProps("postCode")}/>
              {formik.touched.postCode && formik.errors.postCode ? (
            <div className="fv-plugins-message-container">
              <div className="text-danger">{formik.errors.postCode}</div>
            </div>
          ) : null}
            </p>
          </div>
          <div className="col-lg-12">
            <p className="single-form-row">
              <label>Phone</label>
              <input type="number" name="phone"  {...formik.getFieldProps("phone")}/>
              {formik.touched.phone && formik.errors.phone ? (
            <div className="fv-plugins-message-container">
              <div className="text-danger">{formik.errors.phone}</div>
            </div>
          ) : null}
            </p>
          </div>

          <div className="col-lg-12">
            <p className="single-form-row m-0">
              <label>Order notes</label>
              <textarea
                cols={5}
                rows={2}
                name="orderNotes"
                className="checkout-mess"
                placeholder="Notes about your order, e.g. special notes for delivery."
                defaultValue={""}
                {...formik.getFieldProps("orderNotes")}
              />
                 {formik.touched.orderNotes && formik.errors.orderNotes ? (
            <div className="fv-plugins-message-container">
              <div className="text-danger">{formik.errors.orderNotes}</div>
            </div>
          ) : null}
            </p>
          </div>
          <div className="checkout-payment mt-5 col-lg-12">
            <MyButton className="btn-secendory" >Continue to payment</MyButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
