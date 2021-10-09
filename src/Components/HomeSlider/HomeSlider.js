import "./HomeSlider.css";

import { Button, Carousel } from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import { useEffect, useState } from "react";
import { request } from "../../Axios";
import {useHistory} from "react-router-dom"
import { SUCCESS } from "../../HTTPStatus";
const HomeSlider = () => {
  const history = useHistory()
  const [data,setData] = useState([])
  useEffect(()=>{
    fetchSliderData()
  },[])
  const fetchSliderData = async ()=>{
    try {
      const result = await request.get("/slider");
      if(result.data.status !== SUCCESS){
        return
      }
      setData(result.data.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Carousel
        className="home-slider"
        prevIcon={
          <div className="custom-controll-icon-prev custom-controll-icon ">
            <i className="fas fa-angle-left"></i>{" "}
          </div>
        }
        nextIcon={
          <div className="custom-controll-icon-next custom-controll-icon ">
            <i className="fas fa-angle-right"></i>{" "}
          </div>
        }
      >
     {
       data.map(({_id,caption,description,productID,image,image_min})=>    <Carousel.Item key={_id}>
       <img className="d-block w-100" src={image} alt="First slide" />
       <Carousel.Caption>
         <h3>{caption}</h3>
         <p className="d-none d-md-block d-lg-block">{description}</p>
         <MyButton className="transparent-btn text-white " onClick={()=> history.push(`/single-product/${productID}`)}>
           SHOP NOW
         </MyButton>
       </Carousel.Caption>
     </Carousel.Item>)
     }
   
     
      </Carousel>
    </div>
  );
};

export default HomeSlider;
