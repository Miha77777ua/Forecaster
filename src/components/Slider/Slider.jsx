import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";
import style from "./Slider.module.scss";
import First from "../../images/slider-image-1.jpg";
import Second from "../../images/slider-image-2.jpg";
import Third from "../../images/slider-image-3.jpg";
import Fourth from "../../images/slider-image-4.jpg";
import Fifth from "../../images/slider-image-5.jpg";
import { Container } from "../Container/Container";

export const Slider = () => {
  return (
    <section className={style.slider}>
      <Container>
        <h2 className={style.slider__title}>Beautiful nature</h2>
        <Swiper slidesPerView="3" loop={true} spaceBetween="30" modules={[Navigation]} navigation allowTouchMove={false}>
          <SwiperSlide><img src={First} alt="image" className={style.slider__image} /></SwiperSlide>
          <SwiperSlide><img src={Second} alt="image" className={style.slider__image} /></SwiperSlide>
          <SwiperSlide><img src={Third} alt="image" className={style.slider__image} /></SwiperSlide>
          <SwiperSlide><img src={Fourth} alt="image" className={style.slider__image} /></SwiperSlide>
          <SwiperSlide><img src={Fifth} alt="image" className={style.slider__image} /></SwiperSlide>
        </Swiper>
      </Container>
    </section >
  )
}

