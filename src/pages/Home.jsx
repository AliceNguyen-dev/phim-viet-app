import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Page 
import Footer from "../pages/Footer"


// import required modules
import { Pagination, Navigation } from "swiper";

// images card
import Film01 from '../assets/images/film01.jpg'
import Film02 from '../assets/images/film02.jpg'
import Film03 from '../assets/images/film03.jpg'
import Film04 from '../assets/images/film04.jpg'
import Film05 from '../assets/images/film05.jpg'
import Film06 from '../assets/images/film06.jpg'
// import Film10slider from '../assets/images/film10Slider.jpg'
// import Film11Slide from '../assets/images/film11Slider.jpg'
// import Film12Slider from '../assets/images/film12Slider.jpg'
// import Film13Slider from '../assets/images/film13Slider.jpg'

//  images slider

import Film01Slider from '../assets/images/film01Slider.jpg'
import Film02Slider from '../assets/images/film02Slider.jpg'
import Film03Slider from '../assets/images/film03Slider.jpg'
import Film04Slider from '../assets/images/film04Slider.jpg'
import Film05Slider from '../assets/images/film05Slider.jpg'
import Film06Slider from '../assets/images/film06slider.png'
import Film07slider from '../assets/images/film07slider.jpg'
import Film08Slider from '../assets/images/film08Slider.jpg'
import Film09Slider from '../assets/images/film09Slider.jpg'
import Film10slider from '../assets/images/film10slider.jpg'
// import Film11Slide from '../assets/images/film11Slide.jpg'
import Film12Slider from '../assets/images/film12Slider.jpg'
import Film13Slider from '../assets/images/film13Slider.jpg'


export default function Home(){

    return(
        <div className="home-main">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mySlider">
                <SwiperSlide><a className="" href="../series/serie01"><img className="logo-img" src={Film01Slider} alt="film01" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film02Slider} alt="film02" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film03Slider} alt="film03" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film04Slider} alt="film04" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film05Slider} alt="film05" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film06Slider} alt="film06" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film07slider} alt="film07" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film08Slider} alt="film08" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film09Slider} alt="film09" /></a></SwiperSlide>
            </Swiper>
            <h1 className="titleHome">Series</h1>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film01} alt="film01" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film02} alt="film02" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film03} alt="film03" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film04} alt="film04" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film05} alt="film05" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film06} alt="film06" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film07slider} alt="film07" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film08Slider} alt="film08" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film09Slider} alt="film09" /></a></SwiperSlide>
            </Swiper>

            <h1 className="titleHome">Films</h1>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film09Slider} alt="film09" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film10slider} alt="film10" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film05Slider} alt="film11" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film12Slider} alt="film12" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film13Slider} alt="film13" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film01Slider} alt="film01" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film02Slider} alt="film02" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film03Slider} alt="film03" /></a></SwiperSlide>
                <SwiperSlide><a className="" href="/"><img className="logo-img" src={Film04Slider} alt="film04" /></a></SwiperSlide>
            </Swiper>

            <div className="footer">
                <Footer />
            </div>

        </div>

    )
}