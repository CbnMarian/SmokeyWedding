import "./swiper.json";
import React from "react";
import "./swipper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";

import image1 from "../assets/dancing-smoke1.jpg";
import image2 from "../assets/dancing-smoke2.jpg";
import image3 from "../assets/dancing-smoke3.jpg";
import image4 from "../assets/dancing-smoke1.jpg";

const SwiperComponent = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={true}
        slidesPerView={1}
        effect="fade"
        spped={800}
        navigation
        className={StyleSheet.myswiper}
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Slide 4" style={{ width: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
