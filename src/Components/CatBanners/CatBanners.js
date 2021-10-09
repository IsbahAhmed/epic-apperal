import img from "../../assets/img/banner/h3-3.jpg";
import "./CatBanners.css"
const CatBanners = () => {
    return (
     <div className="banner-area benner-style-2">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-12 col-sm-4 ban p-sm-0 p-5 col-custom-f-4  col-md-4">
        {/*single-banner-box start */}
        <div className="single-banner-box">
          <a href="#"><img src="https://i.pinimg.com/originals/db/1b/fe/db1bfeea03f420fb5337375abe3ba27c.jpg" alt /></a>
        </div>
        {/*single-banner-box end */}
      </div>
      <div className="col-lg-4 col-12 col-sm-4 ban p-sm-0 p-5 col-custom-f-4  col-md-4">
        {/*single-banner-box start */}
        <div className="single-banner-box">
          <a href="#"><img src="https://cdn.shopify.com/s/files/1/2219/4051/collections/D-SHIRT.jpg?v=1501759526" alt /></a>
        </div>
        {/*single-banner-box end */}
      </div>
      <div className="col-lg-4 col-12 col-sm-4 ban p-sm-0 p-5 col-custom-f-4  col-md-4">
        {/*single-banner-box start */}
        <div className="single-banner-box">
          <a href="#"><img src={img} alt="" /></a>
        </div>
        {/*single-banner-box end */}
      </div>
    </div>
  </div>
</div>

    )
}

export default CatBanners
