import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../App.css';

function MySwiper() {
  return (
    <>
      <Container className='main-font pt-5 mt-5 pb-5'>
      
          <div className='d-flex justify-content-center'>
            <h1 className='text-3xl intro-font text-secondary'>버거 제조과정</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <h3 className='vg-font pb-3 pt-1'>나의 이야기</h3>
          </div>

          <Swiper
            centeredSlides={true}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            style={{ width: '300px', margin: '0 auto' }}
          >
            {/* 이미지 경로 수정 */}
            <SwiperSlide ><img src="/img/1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/3.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/4.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/5.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/6.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/7.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/8.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/9.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/10.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/11.png" alt="" /></SwiperSlide>
          </Swiper>
          
      
    </Container>
    </>  
  );
}

export default MySwiper;
