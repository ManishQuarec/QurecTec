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
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ullam id, nisi laudantium rem tenetur cumque facere possimus ipsam accusamus voluptate dicta perferendis nihil? Dignissimos similique, accusantium molestiae fugit velit nemo tenetur commodi consequatur sit quod expedita distinctio? Nobis nulla odio, nihil facilis consequuntur quo assumenda ullam, veniam qui saepe corrupti. Explicabo hic officiis vel voluptate eveniet fugit soluta, voluptatum nihil accusantium nostrum? Aperiam atque perferendis fugit? Vel fugit aut dolor qui, dolorum natus ut pariatur aspernatur, reprehenderit eum corrupti beatae quo! Corporis ad quod architecto dolor cumque saepe itaque, ipsa perspiciatis quas facere unde, sed atque sit deleniti nam.
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
