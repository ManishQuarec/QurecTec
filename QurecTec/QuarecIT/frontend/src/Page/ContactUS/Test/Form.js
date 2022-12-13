import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
// import "swiper/less";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { EffectFade } from 'swiper';

import "swiper/css/autoplay";
import "./Form.css";
import img1 from "../../../Image/Testimonials/Image1.png";
import img2 from "../../../Image/Testimonials/Image2.png";
import img3 from "../../../Image/Testimonials/Image3.png";
import img4 from "../../../Image/Testimonials/Image4.png";

function dataSet(count) {
  const datas = [
    {
      id: 1,
      imgSrc: img1,
      designation: "(CEO, Cardekho)",
      Name: " Abhay Verma",
      Content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      id: 2,
      imgSrc: img2,
      designation: "(CEO, CA.COM)",
      Name: " Mr. Mehul mehta",
      Content: ` It was really great working with Trentium Solution. The development
          team was always positive and suggested many improvements without
          charging additional cost. They have been very responsive, polite,
          professional and well communicators. I am looking forward to work with
          .`,
    },
    {
      id: 3,
      imgSrc: img3,
      designation: "(CEO, Nayka)",
      Name: " Ms. Aastha Singha",
      Content: `It was really great working with Trentium Solution. The development team was always positive and suggested many improvements without charging additional cost. They have been very responsive, polite, professional and well communicators. I am looking forward to work with them again very soon.`,
    },
    {
      id: 4,
      imgSrc: img4,
      designation: "(CEO, Theka)",
      Name: " Mr. Anubhav Bassi",
      Content: ` “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      unknown printer took a galley of type and scrambled it to make a type specimen book.”.`,
    },
  ];
  // console.log(count);
  // console.log(count, datas[count].Name);
  return (
    <>
      
        <SwiperSlide key={count}  >
        <div className="testMargin">
          <img src={datas[count].imgSrc} alt="Image" className="pics" />
          <div className="setText">
            <div className="picsName">{datas[count].Name}</div>
            <div className="picsDesignation">{datas[count].designation}</div>
            <div className="picsContent">{datas[count].Content}</div>
          </div>
          </div>
        </SwiperSlide>
      
    </>
  );
}

function Form() {
  return (
    <Swiper
      modules={[Pagination, Autoplay,EffectFade]}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
      // effect={"fade"}
    >
      {dataSet(0)}
      {dataSet(1)}
      {dataSet(2)}
      {dataSet(3)}
    </Swiper>
  );
}

export default Form;
