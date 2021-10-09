
import CatBanners from '../../Components/CatBanners/CatBanners'
import HomeSlider from '../../Components/HomeSlider/HomeSlider'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import bannerImg from '../../assets/img/banner/6.jpg'
import Collection from '../../Components/Collection/Collection'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'

const Home = () => {
    return (
        <div className="page">
            <HomeSlider/>
            <CatBanners/>
           {/* <ProductSlider className="pt-95" title1="Bestseller" title2="Featured Products"/> */}
           {/* <ProductSlider className=" pt-95" title1="New Arrivals" title2="For Men"/> */}
         <div className="banner-area ptb-95">
        
    <div className="row m-0">
      <div className="col-lg-12 px-0">
        <div className="single-banner-box-2">
       <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
   
</div>
        <Collection/>
        <NewsLetter/>
        </div>
    )
}

export default Home
