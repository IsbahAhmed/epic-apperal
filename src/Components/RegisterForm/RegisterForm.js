import React, { useEffect } from "react";
import MyButton from "../MyButton/MyButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { WaveLoading } from 'react-loadingg';

import { requestRegister } from "../../Redux/userReducer/userActions";
import { ErrorAlert } from "../Alert/Alert";
import { CLEAR_REG_ERROR, CLEAR_REG_MESSAGE } from "../../Redux/userReducer/userConstants";
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
  password: Yup.string()
    .trim()
    .required("Password is required")

    .matches(
      // /^(\S*)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?&#~^;`:'".,\d[\d-()_<>/|[{}=+]{8,50}$/,
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      (match) => {
        return "Password should contain minimum eight characters, at least one letter, one number and one special character, Space Not Allowed:";
      }
    ),
  retypePassword: Yup.string()
    .trim()
    .required("Please re type password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password does'nt match"),
    }),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  retypePassword: "",
};
const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userObj) => {
    dispatch(requestRegister(userObj));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      const { retypePassword, ...userObj } = values;
      handleSubmit(userObj);
      setSubmitting(false)
    },
  });
  const {registrationProgress,error,message}   = useSelector((state)=>({
    registrationProgress:state.user.registrationProgress,
    error: state.user.error,
    message: state.user.registrationMessage
  }),shallowEqual)
  useEffect(()=>{
  if(error){  ErrorAlert({
      icon: "error",
      title: "<h3>OOPS!</h3>",
      text: error,
  
    })
  dispatch({
    type:CLEAR_REG_ERROR
  })
  }
  },[error])

  useEffect(()=>{
    if(message){  ErrorAlert({
      icon: "success",
      title: "<h3>Wohoo!</h3>",
      text: message,
  
    })
  dispatch({
    type:CLEAR_REG_MESSAGE
  })
  }
  },[message])
  return (
    <form onSubmit={formik.handleSubmit}>
      
      <p className="coupon-input form-row-first">
        <label>
          <h4>
            First Name <span className="required">*</span>
          </h4>
        </label>
        <input
          type="text"
          name="firstName"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.firstName}</div>
          </div>
        ) : null}
      </p>
      <p className="coupon-input form-row-first">
        <label>
          <h4>
            Last Name <span className="required">*</span>
          </h4>
        </label>
        <input
          type="text"
          name="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.lastName}</div>
          </div>
        ) : null}
      </p>
      <p className="coupon-input form-row-first">
        <label>
          <h4>
            Email <span className="required">*</span>
          </h4>
        </label>
        <input type="text" name="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.email}</div>
          </div>
        ) : null}
      </p>
      <p className="coupon-input form-row-last">
        <label>
          <h4>
            Password <span className="required">*</span>
          </h4>
        </label>
        <input
          type="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.password}</div>
          </div>
        ) : null}
      </p>
      <p className="coupon-input form-row-last">
        <label>
          <h4>
            Retype password <span className="required">*</span>
          </h4>
        </label>
        <input
          type="password"
          name="retypePassword"
          {...formik.getFieldProps("retypePassword")}
        />
        {formik.touched.retypePassword && formik.errors.retypePassword ? (
          <div className="fv-plugins-message-container">
            <div className="text-danger">{formik.errors.retypePassword}</div>
          </div>
        ) : null}
      </p>
      <div className="clear" />

      <MyButton
        disabled={registrationProgress || !formik.isValid}
        style={{width:"130px",height:"55px"}}
        className="btn-secendory position-relative"
      >
        {
          registrationProgress ? <WaveLoading color="white" style={{width:"70px"}}/> : <h4 className="mb-0">Register</h4>
        }
        
      </MyButton>
    </form>
  );
};

export default RegisterForm;
