import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
// import 'swiper/less';
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./Swippers.css";
// import './App.css';


import "swiper/css/autoplay";

function Swipper() {
  function createSlide(count) {
    return (
      <SwiperSlide key={count} className="data" style={{zIndex:-10}}>
        <div className="Main-Container">
          <div className="i-container">
            <div className="i-right">
              <h4>
                Are You Looking For E-commerce Site To Sell <br />
                Your Products Worldwide
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                ratione, totam consectetur quaerat voluptates est cupiditate!
                Sint distinctio officia tenetur optio assumenda, sequi
                quibusdam, veniam molestiae non nulla sed sunt!
              </p>
            </div>
            <div className="i-left">
              <img
                className="img"
                src={require(`../../../Image/homeImage/${count}.png`)}
                alt=" Image"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {createSlide(1)}
      {createSlide(2)}
      {createSlide(3)}
      {createSlide(4)}
      {createSlide(5)}
      {createSlide(6)}
      {createSlide(7)}
      {createSlide(8)}
    </Swiper>
  );
}

export default Swipper;
