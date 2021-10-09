import React from 'react'
import parse from "html-react-parser";
import'../../Pages/SingleProduct/SingleProduct.css';

const ProductDescription = ({description}) => {
    return (
        <div className="tab-pane fade-up" id="description">
   <div className="container-fluid">
   <div className="description-content description">
         {
           parse(description)
         }
        </div>
   </div>
      </div>
    )
}

export default ProductDescription
