import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import MyButton from "../../Components/MyButton/MyButton";
import { useHistory } from "react-router";
import QuantityInput from "../../Components/QuantityInput/QuantityInput";
import SingleProductSlider from "../../Components/SiingleProductSlider/SingleProductSlider";

import RatingStars from "../../Components/RatingStars/RatingStars";
import ProductDescriptionAndReview from "../../Components/ProductDescriptionAndReview/ProductDescriptionAndReview";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import SizeSelector from "../../Components/SizeSelector/SizeSelector";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../../Redux/productsReducer/productActions";
import SingleProductLoader from "./SingleProductLoader";
import { ShimmerText } from "react-shimmer-effects";
import parse from "html-react-parser";
import "./SingleProduct.css"
import ColorSelecctor from "../../Components/ColorSelector/ColorSelecctor";
import { addToCart } from "../../Redux/cartReducer/cartActions";
import ToastBox from "../../Components/ToastBox/ToastBox";

const SingleProduct = ({
  match: {
    params: { productID },
  },
  fetchSingleProduct,
  singleProduct,
  isLoading,
  addToCart,
  cart
}) => {
  const history = useHistory();
  useEffect(() => {
    if (!productID) return history.push("/products");
    // const queryParams = {
    //   fields: "name,price,discountedPrice,sku,colors,size,quantity,images",
    // };
    fetchSingleProduct(productID, {});
  }, [productID, fetchSingleProduct]);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [toast, setToast] = useState(false);

  const {size,colors,images,_id,name,price,description,discountedPrice,category,type,quantity,sku,reviews } = singleProduct;
  const handleCartAdd = () => {
    const cartItem = cart.find(({ productId }) => productId === _id);
    if (cartItem && cartItem.quantity <= quantity) {
      const cartObj = {
        name,
        price: discountedPrice ? discountedPrice : price,
        customAttributes: {
          color: selectedColor || (colors && colors[0]),
          size: selectedSize || (size && size[0]),
        },
        quantity: selectedQuantity,
        image: images[0].image_min,
        productId: _id,
        stock: quantity,
      };

      addToCart(cartObj);
      setToast(true);
    }
    else if(!cartItem){
      const cartObj = {
        name,
        price: discountedPrice ? discountedPrice : price,
        customAttributes: {
          color: selectedColor || (colors && colors[0]),
          size: selectedSize || (size && size[0]),
        },
        quantity: selectedQuantity,
        image: images[0].image_min,
        productId: _id,
        stock: quantity,
      };

      addToCart(cartObj);
      setToast(true);
    }
  
  };

  return (
    <div className="single-product">
      <Breadcrumb>
        <div>
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item active">Single Product</li>
        </div>
      </Breadcrumb>
      <div className="content-wraper mt-95">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row single-product-area">
                {!isLoading ? (
                  <>
                    <div className="col-xl-4  col-lg-4 offset-xl-1 col-md-5 col-sm-12">
                      <SingleProductSlider images={images} />
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-7 col-sm-12">
                      {/* product-thumbnail-content start */}
                      <div className="quick-view-content">
                        <div className="product-info">
                          <h2>{name}</h2>
                          <RatingStars />
                          <div className="price-box">
                            <h2 className="new-price d-inline">Rs 
                              {
                                discountedPrice ? discountedPrice : price
                              }
                            </h2>
                          {
                            discountedPrice &&   <span className="old-price">Rs{price}</span>
                          }
                          </div>
                       {
                         description &&    <div className="description">
                         {
                           parse(description || "")
                         }
                        </div>
                       }
                          {/* <SizeSelector /> */}
                        {
                          colors &&   <div className="modal-color mt-3">
                          <h4>Color</h4>
                         <ColorSelecctor colors={colors} setSelectedColor={setSelectedColor}/>
                        </div>
                        }
                         {
                           size &&  <SizeSelector setSelectedSize={setSelectedSize} size={size}/>
                         }
                          <div className="quick-add-to-cart mt-3">
                            <div className="quantity">
                              <h4>Quantity</h4>
                            </div>
                            <QuantityInput  onChange={(e) => setSelectedQuantity(e.target.value)}
                        value={selectedQuantity}
                        quantity={quantity}/>
                            <MyButton className="btn-primary ml-3" onClick={handleCartAdd}>
                              Add to cart
                            </MyButton>
                          </div>
                          <div className="mt-3">
                          {
                            quantity ?   <p>
                            {" "}
                            <i className="fas fa-check mr-2 text-success"></i>
                            In stock{" "}
                          </p>:   <p>
                              {" "}
                              <i className="fas fa-times mr-2 text-danger"></i>
                              Out of stock{" "}
                            </p>
                          }
                          </div>
                          {/* <div className="social-sharing">
                <h3>Share</h3>
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                </ul>
              </div> */}
                        </div>
                      </div>
                      {/* product-thumbnail-content end */}
                    </div>
                  </>
                ) : (
                  <SingleProductLoader />
                )}
                {/* ///// */}
              </div>
            </div>
          </div>
      {
        isLoading ? <ShimmerText className="mt-5"/> :     <ProductDescriptionAndReview description={description} reviews={reviews} />
      }
        </div>
        <ToastBox
                show={toast}
                title="Alert"
                onHide={() => setToast(false)}
                time="Just Now"
              >
                <p>
                  <i class="fas fa-check-circle mx-2 text-success"></i>
                  Your item is added to Cart
                </p>
              </ToastBox>
      </div>
      <ProductSlider className="py-100" title1="Related Products" title2={type} type={type}/>
    </div>
  );
};
const mapState = (state) => ({
  cart: state.cart.cartItems,
  singleProduct: state.products.singleProduct.data,
  isLoading: state.products.singleProduct.isLoading,
});
const actions = {
  fetchSingleProduct,
  addToCart,

};
export default connect(mapState, actions)(SingleProduct);
