import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Redux/wishlistReducer/wishlistActions";
import ToastBox from "../ToastBox/ToastBox";

import "./ProductListItem.css";
const ProductListItem = ({ handleShow, product }) => {
  const dispatch = useDispatch();
  const { name, images, price, discountedPrice, _id } = product;
  const [toast, setToast] = useState(false);
  const [existinWishlist, setExistinWishList] = useState(false);
  const [toastText, setToastText] = useState("");
  const handleWishlistAdd = () => {
    const wishlistobj = {
      name,
      price: discountedPrice ? discountedPrice : price,
      image: images[0].image_min,
      productId: _id,
    };
    dispatch(addToWishlist(wishlistobj));
    setToastText("Your item is added to wishlist");
    setToast(true);
  };
  const handleRemove = () => {
    setToastText("Your item is removed from wishlist");
    setToast(true);

    dispatch(removeFromWishlist(_id));
  };
  const wishlist = useSelector(
    (state) => state.wishlist.wishlistItems,
    shallowEqual
  );
  React.useEffect(() => {
    const check = wishlist.some(({ productId }) => productId === _id);
    setExistinWishList(check);
  }, [wishlist]);
  return (
    <div className="product-list-item px-sm-0 px-5">
      <div className="product-img">
        <Link to={`/single-product/${_id}`}>
          <img src={images[0]?.image} className="img-1" alt="" />
          <img src={images[1]?.image} className="img-2" alt="" />
        </Link>
        <div className="add-ons">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip className="tooltip-custom">QUICK VIEW</Tooltip>}
          >
            <div className="action-btn" onClick={() => handleShow(_id)}>
              <i className="fa fa-eye"></i>
            </div>
          </OverlayTrigger>
          {!existinWishlist ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip-custom">ADD TO WISHLIST</Tooltip>
              }
            >
              <div className="action-btn" onClick={handleWishlistAdd}>
                <i className="fa fa-heart"></i>
              </div>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip-custom">
                  REMOVE FROM WISHLIST
                </Tooltip>
              }
            >
              <div className="action-btn" onClick={handleRemove}>
                <i class="far fa-heart"></i>
              </div>
            </OverlayTrigger>
          )}

          {/* <OverlayTrigger
            placement="top"
            overlay={<Tooltip className="tooltip-custom">COMPARE</Tooltip>}
          >
            <div className="action-btn">
              <i className="fa fa-retweet"></i>
            </div>
          </OverlayTrigger> */}
          {/* <OverlayTrigger
            placement="top"
            overlay={<Tooltip className="tooltip-custom">ADD TO CART</Tooltip>}
          >
            <div className="action-btn">
              <i className="fa fa-shopping-cart"></i>
            </div>
          </OverlayTrigger> */}
        </div>
      </div>
      <div className="pd-title mt-5">
        <Link to="/">
          <h4 className="pd-text">{name}</h4>
        </Link>
      </div>
      <div className="pd-price d-flex mt-3 justify-content-between">
        <div className="">
          <h3 className="pd-text">
            Rs {discountedPrice ? discountedPrice : price}
          </h3>
          {discountedPrice ? (
            <p>
              <del className="text-muted">Rs {price}</del>
            </p>
          ) : null}
        </div>

        <div className="rating-box">
          <ul className="rating">
            <li className="no-star">
              <i className="fa fa-star" />
            </li>
            <li className="no-star">
              <i className="fa fa-star" />
            </li>
            <li className="no-star">
              <i className="fa fa-star" />
            </li>
            <li className="no-star">
              <i className="fa fa-star" />
            </li>
            <li className="no-star">
              <i className="fa fa-star" />
            </li>
          </ul>
        </div>
      </div>
      <ToastBox show={toast} onHide={() => setToast(false)}>
        <p>
          <i class="fas fa-check-circle mx-2 text-success"></i>
        {toastText}
        </p>
      </ToastBox>
    </div>
  );
};

export default ProductListItem;
