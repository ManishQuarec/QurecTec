import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "./FourthPageComponent.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function FourthPageComponent(props) {
// console.log(props);

  function reg(data) {
console.log(data);
    return (
      <>
        <SwiperSlide  style={{marginRight: '1px'}}>
          <div className="ForthPageBorder">
            <img src={require(`../../../../Image/ServicePageForthComponent/${data.Image}.png`)} alt="" className="ForthPageImage" />
            <div className="ForthPageHeader">Gujarat Vandan</div>
            <div className="ForthPageContent">
              Quarec IT Hub is a future-ready web and mobile app development
              company serving to drive the digital revolution. Since its
              inception in 1998, our friendly
            </div>
          </div>
        </SwiperSlide>
      </>
    );
  }
  return (
    <>
      <div className="FourthPageComponent">
        <div className="ForthPageHeader2"> Projects We Delivered </div>
        <div className="SwiperBorder">
        <Swiper
          slidesPerView={3}
        //   centeredSlides={true}
           spaceBetween={0}
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
          
            {reg(props.value.Item1)}
            {reg(props.value.Item2)}
            {reg(props.value.Item3)}
            {reg(props.value.Item1)}
            {reg(props.value.Item2)}
            {reg(props.value.Item3)}
         
        </Swiper>
        </div>
      </div>
    </>
  );
}

export default FourthPageComponent;
