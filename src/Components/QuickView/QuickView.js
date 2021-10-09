import React from "react";
import { Carousel, Modal, ToastContainer, Toast } from "react-bootstrap";
import "./QuickView.css";
import img from "../../assets/img/product/1.jpg";
import ColorSelecctor from "../ColorSelector/ColorSelecctor";
import SizeSelector from "../SizeSelector/SizeSelector";
import QuantityInput from "../QuantityInput/QuantityInput";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../../Redux/productsReducer/productActions";
import QuickViewLoader from "./QuickViewLoader";
import { addToCart } from "../../Redux/cartReducer/cartActions";
import ToastBox from "../ToastBox/ToastBox";

const QuickView = ({
  show,
  handleClose,
  selectedProduct,
  fetchSingleProduct,
  singleProduct,
  isLoading,
  addToCart,
  cart,
}) => {
  const {
    name,
    price,
    discountedPrice,
    sku,
    colors = [],
    size = [],
    quantity,
    images,
    _id,
  } = singleProduct;

  useEffect(() => {
    return () => {
      setToast(false);
    };
  }, [show]);

  useEffect(() => {
    const queryParams = {
      fields: "name,price,discountedPrice,sku,colors,size,quantity,images",
    };
    if (selectedProduct && selectedProduct !== singleProduct?._id) fetchSingleProduct(selectedProduct, queryParams);
  }, [selectedProduct]);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [toast, setToast] = useState(false);

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
    <Modal
      size="lg"
      centered
      show={show}
      onHide={handleClose}
      className="quickview-modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="row">
          {isLoading ? (
            <QuickViewLoader />
          ) : (
            <>
              <div className="col-md-6">
                <QuickViewSlider images={images} />
              </div>
              <div className="col-md-6">
                <h3 className="mb-4x">{name}</h3>
                <h3>₨{discountedPrice ? discountedPrice : price}</h3>
                <p>{discountedPrice ? <strike> ₨{price} </strike> : null}</p>
                <p>SKU: {sku}</p>
                {colors?.length ? (
                  <ColorSelecctor
                    setSelectedColor={setSelectedColor}
                    colors={colors}
                  />
                ) : null}

                {size?.length ? (
                  <SizeSelector setSelectedSize={setSelectedSize} size={size} />
                ) : null}

                <div className="mt-3">
                  {quantity ? (
                    <>
                      <h4>Quantity</h4>
                      <QuantityInput
                        onChange={(e) => setSelectedQuantity(e.target.value)}
                        value={selectedQuantity}
                        quantity={quantity}
                      />
                    </>
                  ) : (
                    <h4 className="text-danger">Out of stock</h4>
                  )}
                </div>
                <div className="col-12 p-0 my-3" onClick={handleCartAdd}>
                  <MyButton className="btn-secendory w-100">
                    Add to Cart
                  </MyButton>
                </div>
                <Link to={`/single-product/${_id}`}>
                  <p style={{ textDecoration: "underline" }}>
                    View more details
                  </p>
                </Link>
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
            </>
          )}
        </div>
      </Modal.Body>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

const QuickViewSlider = ({ images }) => {
  return (
    <Carousel controls={false} className="circle-indicators">
      {images?.map(({ image }) => (
        <Carousel.Item key={image}>
          <img src={image} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
const mapState = (state) => ({
  singleProduct: state.products.singleProduct.data,
  isLoading: state.products.singleProduct.isLoading,
  cart: state.cart.cartItems,
});
const action = {
  fetchSingleProduct,
  addToCart,
};
export default connect(mapState, action)(QuickView);
