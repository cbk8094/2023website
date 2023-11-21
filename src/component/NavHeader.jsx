import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function NavHeader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setIsHidden(true); // 아래로 스크롤 시 숨김
      } else {
        setIsHidden(false); // 위로 스크롤 시 나타냄
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav-header ${isHidden ? 'hidden' : ''}`}>
      <Container className='main-font'>
        <Row>
          <Col className='pt-4 pb-4 d-flex justify-content-center'>
            <ul className='d-flex justify-content-center list-unstyled m-0 '>
              <li>
                <a className='m-2 no-underline xl a-hover text-with-glow' href="#">Intro</a>
              </li>
              <li>
                <a className='m-2 no-underline xl a-hover text-with-glow' href="/home">history</a>
              </li>
              <li>
                <a className='m-2 no-underline xl a-hover text-with-glow' href="/home">Hobby</a>
              </li>
              <li>
                <a className='m-2 no-underline xl a-hover text-with-glow' href="/home">Music</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .nav-header {
          position: fixed;
          width: 100%;
          z-index: 1000;
          transition: transform 0.3s ease;
        }

        .hidden {
          opacity: 0;
          transition: opacity 2s ease-in-out;
          transform: translateY(-100%);
        }
      `}</style>
    </div>
  );
}

export default NavHeader;
