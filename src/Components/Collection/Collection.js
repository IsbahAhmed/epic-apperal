import React from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import bannerImg from '../../assets/img/banner/8.jpg'
const Collection = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    {/* <ProductSlider title1="Summer collection" title2="For Men"/> */}
                </div>
                <div className="col-md-3 d-md-block d-none">
            <div className="single-banner-box">
  <a href="#"><img src={bannerImg} alt /></a>
</div>

                </div>
            </div>
        </div>
    )
}

export default Collection
