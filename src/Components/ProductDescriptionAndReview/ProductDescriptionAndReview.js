import React, { useState } from 'react'
import ProductDescription from '../ProductDescription/ProductDescription'
import ProductReviews from '../ProductReviews/ProductReviews'
import "./style.css"
const ProductDescriptionAndReview = ({description="",reviews=[]}) => {
    const [activeTab,setActiveTab] = useState(1);
    const tabSwitcher = (id)=>{
            setActiveTab(id)
    }   
    return (
        <div className="product-info-review">
      <div className="row">
        <div className="col">
          <div className="product-info-detailed">
            <div className="discription-tab-menu">
              <ul role="tablist" className="nav">
                <li className={activeTab == 1 ? "active":""} onClick={()=> tabSwitcher(1)}>
                    <h2 className="mr-5">Description</h2>
                </li>
                <li className={activeTab == 2 ? "active":""} onClick={()=> tabSwitcher(2)}>
                    <h2>
                    Reviews {reviews.length ? `(${reviews.length})`:null}
                    </h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5">
          
           {
               activeTab == 1 ? <ProductDescription description={description} /> : <ProductReviews reviews={reviews}/>
           }
                
            
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProductDescriptionAndReview
