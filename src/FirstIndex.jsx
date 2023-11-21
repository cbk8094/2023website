import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function FirstIndex() {
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`main-font pt-5 ${isVisible ? 'visible' : 'hidden'}`}>
      <Container className='pt-5'>
        <Row className='d-flex justify-content-between flex-wrap'>
          <Col xs={12} md={5}>
            <h1 className='intro-font text-secondary'>안녕하세요,</h1>
            <h1 className='intro-font text-secondary'>아채버거입니다.</h1>
            <div className='d-flex'></div>
            <div className='d-flex align-items-start'>
              <h3 className='vg-font pt-3 m-0'>Choi Bo Gyu </h3>
              <p className='vg-font pt-3 mt-0 mb-0 align-self-end' style={{ marginLeft: '10px' }}> @yachae_burger</p>
            </div>
            <hr />
            <p className='m-0'><strong>생년월일 : </strong>1994.01.04</p>
            <p className='m-0'><strong>서식지 : </strong>독산동일대</p>
            <p className='m-0'><strong>좋아하는것 : </strong>수면</p>

            <h3 className='vg-font pt-5'>@Skill</h3>
            <hr/>
            <div className='d-flex flex-wrap pb-5'>
              <div className='rounded bg-secondary d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>걷기</h6>
              </div>
              <div className='rounded bg-secondary d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>수면</h6>
              </div>
              <div className='rounded bg-secondary d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>돈쓰기</h6>
              </div>
              <div className='rounded ill d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>Illstrator</h6>
              </div>
              <div className='rounded ph d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>PhotoShop</h6>
              </div>
              <div className='rounded ind d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>InDesign</h6>
              </div>
              <div className='rounded premi d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>Premiere</h6>
              </div>
              <div className='rounded premi d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>AftEreffect</h6>
              </div>
              <div className='rounded c4d d-flex justify-content-center mb-2' style={{ marginRight: '8px' }}>
                <h6 className='py-2 px-3 m-0 text-white main-font'>C4D</h6>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="order-md-last">
            <img className='align-middle img-size d-flex justify-content-center w-100' src='./img/vg.png' alt='아채버거 이미지'></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FirstIndex;
