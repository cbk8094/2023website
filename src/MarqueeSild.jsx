import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function MarqueeSild() {

  return (
    <>
      <div className="main-font pt-5 mt-5">
        <Container>
          <Row>
            <Col>
            <div className='d-flex justify-content-center'>
              <h1 className='intro-font text-secondary'>관심사</h1>
            </div>
            <div className='d-flex justify-content-center'>
              <h3 className='vg-font pt-2 m-0 pb-4'>좁고 얇고 가늘고 길게</h3>
            </div>  
              <div className='d-flex justify-content-center pb-3'>
                <marquee behavior="" direction="right">
                  <div className='d-flex flex-nowrap marquee2'>
                    <div className='fav-box pr-3' style={{ marginRight: '2rem' }}>
                      <img src='./img/netflix.jpg' className='fav-img' />
                    </div>
                    <div className='fav-box' style={{ marginRight: '2rem' }}>
                      <img src='./img/maple.jpg' className='fav-img' />
                    </div>
                    <div className='fav-box' style={{ marginRight: '2rem' }}>
                      <img src='./img/keyboard.jpeg' className='fav-img' />
                    </div>
                    <div className='fav-box' style={{ marginRight: '2rem' }}>
                      <img src='./img/pepe.png' className='fav-img' />
                    </div>
                    <div className='fav-box d-flex justify-content-center' style={{ marginRight: '2rem' }}>
                      <img src='./img/eth.jpeg' className='fav-img' />
                    </div>
                    <div className='fav-box d-flex justify-content-center' style={{ marginRight: '2rem' }}>
                      <img src='./img/marsyard.jpg' className='fav-img' />
                    </div>
                  </div>
                </marquee>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>

  );
}

export default MarqueeSild;
