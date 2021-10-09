import React from 'react';
import ReactDom from "react-dom"
import { Toast } from 'react-bootstrap'
import "./ToastBox.css"
const ToastBox = (props) => {
    const {show,onHide,children,title,time} = props;
    return ReactDom.createPortal(
        <>
            <Toast onClose={onHide} show={show} delay={3000} autohide className="my-toast shadow">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <h3 className="mr-auto mb-0">
                {title}
            </h3>
            <p className="mb-0">{time}</p>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
        </>,
        document.getElementById("toast")
    )
}

export default ToastBox
