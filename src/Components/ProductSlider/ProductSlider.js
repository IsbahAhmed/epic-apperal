import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { SUCCESS } from "../../HTTPStatus";
import { fetchProducts } from "../../Redux/sagas/productsWatchers/productsApi";
import { createChunks } from "../../Utility";
import ProductListItem from "../ProductListItem/ProductListItem";
import QuickView from "../QuickView/QuickView";
import "./ProductSlider.css";
import ProductsLoader from "../ProductsLoader/ProductsLoader";
const ProductSlider = (props) => {
  const [show, setShow] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [noData,setNoData] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { title1, title2, className, type = "" } = props;
  const [mobileSlider, setMobileSlider] = useState(false);
  const [chunks, setChunks] = useState([]);
  const WindowWidthChecker = () => {
    const width = window.innerWidth;
    if (width <= 575) {
      setMobileSlider(true);
    } else {
      setMobileSlider(false);
    }
  };

  useEffect(() => {
    WindowWidthChecker();

    window.addEventListener("resize", WindowWidthChecker);
    return () => {
      window.removeEventListener("resize", WindowWidthChecker);
    };
  }, []);
  useEffect(() => {
    if (type) {
      const params = {
        fields: "name,images,price,discountedPrice",
      };
      fetchProducts(params)
        .then((res) => {
          if (res.data.status === SUCCESS) {
            if(res.data.data.length)
            {
              setRelatedProducts(res.data.data);
            }
            else{
              setNoData(true)
            }
            setLoading(false)
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
    }
  }, [type]);
  useEffect(() => {
    if (relatedProducts.length) {
      const c = createChunks(relatedProducts, 3);
      setChunks(c);
    }
  }, [relatedProducts]);
  return (
    <div className={`product-area ${className}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="section-title sectoin-title-left">
              <div className="product-tabs-list">
                <ul role="tablist" className="nav slider-title">
                  <li className="active" role="presentation">
                    <h3 style={{ fontSize: "2rem" }}>{title1}</h3>
                  </li>
                  <li role="presentation">
                    <h4 style={{ fontSize: "2rem" }}>{title2}</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {
        relatedProducts.length && !isLoading ? 
        <>
 {
   mobileSlider ? (
    <MobileSlider handleShow={handleShow} relatedProducts={relatedProducts}/>
  ) : (
    <Carousel
      className="product-slider"
      prevIcon={
        <div className="custom-icon-prev custom-icon ">
          <i className="fas fa-angle-left"></i>{" "}
        </div>
      }
      nextIcon={
        <div className="custom-icon-next custom-icon ">
          <i className="fas fa-angle-right"></i>{" "}
        </div>
      }
    >
      {chunks.map((products, i) => (
        <Carousel.Item key={i}>
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-4" key={product._id}>
                <ProductListItem
                  handleShow={handleShow}
                  product={product}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
 }
        </> : noData ? <h3 className="text-center text-muted">
          No products found
        </h3>: <div className="row">
        <ProductsLoader/>
        </div>
       }
      </div>
      <QuickView handleClose={handleClose} show={show} />
    </div>
  );
};

const MobileSlider = ({ handleShow,relatedProducts }) => {

  return (
    <Carousel
      className="product-slider"
      prevIcon={
        <div className="custom-icon-prev custom-icon ">
          <i className="fas fa-angle-left"></i>{" "}
        </div>
      }
      nextIcon={
        <div className="custom-icon-next custom-icon ">
          <i className="fas fa-angle-right"></i>{" "}
        </div>
      }
    >
   {
     relatedProducts.map((product)=>   <Carousel.Item key={product._id}>
     <div className="row">
       <div className="col-sm-12">
         <ProductListItem handleShow={handleShow} product={product}/>
       </div>
     </div>
   </Carousel.Item>)
   }
    
    </Carousel>
  );
};

export default ProductSlider;
