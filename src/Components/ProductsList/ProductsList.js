import React, { useEffect, useState } from "react";
import ProductListItem from "../ProductListItem/ProductListItem";
import QuickView from "../QuickView/QuickView";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/productsReducer/productActions";
import ProductsLoader from "../ProductsLoader/ProductsLoader";
import { ErrorAlert } from "../Alert/Alert";
const ProductsList = ({ fetchProducts, products, isLoading, pages , error}) => {
  const [show, setShow] = useState(false);
    const [selectedProduct,setSelectedProduct] = useState()
  const handleClose = () => {
      setSelectedProduct()
    setShow(false);
  }
  const handleShow = (id) => {
      setSelectedProduct(id)
    setShow(true);
  }

  useEffect(() => {
    const queryParams = {
      fields: "name,images,price,discountedPrice",

      limit: 12,
      page: 1,
    };
    fetchProducts(queryParams);
  }, []);
  return (
    <div className="row">
    
      {
          isLoading ?  <ProductsLoader/> : products.length && !isLoading ? products.map((prod)=>
          <div className="col-sm-3 mb-5" key={prod._id}>
        <ProductListItem handleShow={handleShow} product={prod}/>
      </div>
          )  : error ? ErrorAlert({
            icon: "error",
            title: "<h3>OOPS!</h3>",
            text: error,
        
          }):null
      }

      <QuickView handleClose={handleClose} selectedProduct={selectedProduct} show={show} />
    </div>
  );
};
const mapState = (state) => ({
  products: state.products.data,
  pages: state.products.pages,
  isLoading: state.products.isLoading,
  error:state.products.error
});
const actions = {
  fetchProducts,
};
export default connect(mapState, actions)(ProductsList);
