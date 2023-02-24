import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../assets/Images/Slider1.png";
import Slider2 from "../../assets/Images/Slider2.png";
import Slider3 from "../../assets/Images/Slider3.png";
import SliderCard from "../../Components/SliderCard/SliderCard";
import "./Slider.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";

const Slider = () => {
  return (
    <section className="Slider">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          speed: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard bgimg={Slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard bgimg={Slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard bgimg={Slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard bgimg={Slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard bgimg={Slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard bgimg={Slider3} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
