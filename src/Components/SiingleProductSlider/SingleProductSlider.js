import React, { useEffect, useState } from "react";
import "./SingleProductSlider.css";
import img from "../../assets/img/product/1.jpg";
import { Carousel } from "react-bootstrap";
import { createChunks } from "../../Utility";

const SingleProductSlider = ({ images = [] }) => {
  const [mobileSlider, setMobileSlider] = useState(false);
  const [chunks, setChunks] = useState([]);
  const [selected, setSelected] = useState(images[0]?.image);
  const [blur, setBlur] = useState(0);
  const WindowWidthChecker = () => {
    const width = window.innerWidth;
    if (width <= 767) {
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
    const c = createChunks(images, 3);
    setChunks(c);
  }, [images]);

  const changeImage = (image, image_min) => {
    setSelected(image_min);
    setBlur(3);
    setTimeout(() => {
      setSelected(image);
      setBlur(0);
    }, 300);
  };
  return (
    <div className="single-product-slider ">
      <div className="selected-img">
        {/* <ReactImageZoom {...options} /> */}
        <img src={selected} alt="" style={{ filter: `blur(${blur}px)` }} />
      </div>
      {mobileSlider ? (
        <MobileSlider images={images} changeImage={changeImage} />
      ) : (
        <Carousel className="mt-3" controls={false}>
          {chunks.map((imgArr, i) => (
            <Carousel.Item key={i}>
              <div className="row">
                {imgArr.map(({ image, image_min }) => (
                  <div
                    className="col-md-4"
                    kwy={image}
                    onClick={() => changeImage(image, image_min)}
                  >
                    <img src={image_min} alt="" />
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};
const MobileSlider = ({ images, changeImage }) => {
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    const c = createChunks(images, 4);
    setChunks(c);
  }, [images]);

  return (
    <Carousel className="mt-3" controls={false}>
      {chunks.map((imgArr, i) => (
        <Carousel.Item key={i}>
          <div className="row">
            {imgArr.map(({ image, image_min }) => (
              <div
                className="col-3 text-center"
                kwy={image}
                onClick={() => changeImage(image, image_min)}
              >
                <img src={image_min} width="100%" alt="" />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default SingleProductSlider;
