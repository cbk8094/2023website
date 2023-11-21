import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { PiVinylRecord } from "react-icons/pi";

function SecondIndex() {
  const titles = "즘 즐겨 듣는 노래";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(150);

  const videoRef = useRef();

  useEffect(() => {
    function tick() {
      setLandingTitle((prev) => prev + titles[count]);
      setCount((prev) => prev + 1);
    }

    if (count < titles.length) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    } else {
      setDelay(null);
      setTimeout(() => {
        setLandingTitle("");
        setCount(0);
        setDelay(300);
      }, 2000);
    }
  }, [count, delay, titles]);

  const handleVideoClick = () => {
    // 비디오 클릭 시 음소거 토글
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className="main-font pt-5 mt-5 second-index">
      <Container>
        <Row>
          <Col>
            <div className='d-flex justify-content-center'>
              <h1 className="text-3xl inline animate-typingCursor intro-font text-secondary">
                요{landingTitle}
              </h1>
            </div>
            <div className='d-flex justify-content-center'>
              <h3 className='vg-font py-3'><PiVinylRecord className='spin-record'/><i>Paul Blanco-Thanks For Nothing Album</i></h3>
            </div>
            <div className='d-flex justify-content-center'>
              <video ref={videoRef} className='pb-3' autoPlay loop onClick={handleVideoClick} style={{ width: '70%', height: 'auto' }}>
                <source src="./img/PAUL BLANCO - Thanks For Nothing (Full Album) (ENG).mp4" type="video/mp4" />
              </video>
            </div>
            <div className='d-flex justify-content-center pb-3'>
              <div className='marquee'>
                <div>
                  <span className='text-secondary'>영상을 클릭하면 음소거 됩니다. 재 클릭시 음소거 취소 됩니다.</span>
                  <span className='text-secondary'>영상을 클릭하면 음소거 됩니다. 재 클릭시 음소거 취소 됩니다.</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center pb-3'>
              <a className='h6 px-5 py-3 button-youtube' href='https://www.youtube.com/watch?v=E0ZsiwnzrWk&t=253s'style={{color:'white'}} >유튜브 바로가기</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecondIndex;
