import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";

import "./swipper.scss";

import image1 from "../assets/dancing-smoke1.jpg";
import image2 from "../assets/dancing-smoke2.jpg";
import image3 from "../assets/dancing-smoke3.jpg";

const SwiperComponent = () => {
  return (
    <div className="container-slider">
      <Swiper
        className="myswiper"
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={true}
        slidesPerView={1}
        effect="fade"
        speed={800}
        navigation
      >
        <SwiperSlide className="swiperslide">
          <img src={image1} alt="Slide 1" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={image2} alt="Slide 2" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={image3} alt="Slide 3" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={image2} alt="Slide 4" style={{ width: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
