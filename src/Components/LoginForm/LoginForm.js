import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { signin } from "../../Redux/sagas/userWatchers/userApi";
import { requestLogin } from "../../Redux/userReducer/userActions";
import MyButton from "../MyButton/MyButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ErrorAlert } from "../Alert/Alert";
import {
  CLEAR_REG_ERROR,
  CLEAR_REG_MESSAGE,
} from "../../Redux/userReducer/userConstants";
import WaveLoading from "react-loadingg/lib/WaveLoading";
const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValues;
  const handleFormValues = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const { loginProgress, loginMessage, loginError } = useSelector(
    (state) => ({
      loginProgress: state.user.loginProgress,
      loginMessage: state.user.loginMessage,
      loginError: state.user.loginError,
    }),
    shallowEqual
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // console.log(formValues)
      dispatch(requestLogin(formValues));
    }
  };
  useEffect(() => {
    if (loginError) {
      ErrorAlert({
        icon: "error",
        title: "<h3>OOPS!</h3>",
        text: loginError,
      });
      dispatch({
        type: CLEAR_REG_ERROR,
      });
    }
  }, [loginError]);

  useEffect(() => {
    if (loginMessage) {
      ErrorAlert({
        icon: "success",
        title: "<h3>Wohoo!</h3>",
        text: loginMessage,
      });
      dispatch({
        type: CLEAR_REG_MESSAGE,
      });
    }
  }, [loginMessage]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="coupon-input form-row-first">
          <label>
            <h4>
              Email <span className="required">*</span>
            </h4>
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleFormValues}
            required
          />
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
            value={password}
            onChange={handleFormValues}
            required
          />
        </p>
        <div className="clear" />
        <div className="d-flex align-items-center justify-content-between w-100">
          <p>
            <MyButton
              disabled={loginProgress}
              style={{width:"130px",height:"55px"}}
              className="btn-secendory position-relative"
            >
              
        {
          loginProgress ? <WaveLoading color="white" style={{width:"70px"}}/> : <h4 className="mb-0"> Login</h4>
        }
            </MyButton>
            {/* <label><input type="checkbox" defaultValue={1} /><span>Remember me</span></label> */}
          </p>
          <h4
            style={{ color: "var(--color-primary)", cursor: "pointer" }}
            onClick={handleShow}
          >
            Lost your password?
          </h4>
        </div>
      </form>
      <LostPasswordForm show={show} handleClose={handleClose} />
    </>
  );
};

const LostPasswordForm = (props) => {
  var { show, handleClose } = props;
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <div className="under-line">
          <h2>Enter Email</h2>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p className="coupon-input form-row-first">
          <input
            type="text"
            name="email"
            placeholder=" Enter your registered email."
          />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <MyButton className="btn-secendory">Submit</MyButton>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginForm;
