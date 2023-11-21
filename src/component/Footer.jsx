import { Container, Row, Col} from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer(){
  return(
    <div style={{background:"#ddd"}} className='py-5'>
      <Container>
        <Row className='mb-3'>
          <Col md={6}>
            <ul className='d-flex justify-content-md-start justify-content-center p-0'>
              <li><a href="#!" className='text-decoration-none text-dark small'>이용약관</a></li>
              <li className='px-3'>l</li>
              <li><a href="#!" className='text-decoration-none text-dark small'>개인정보처리방침</a></li>
              <li className='px-3'>l</li>
              <li><a href="#!" className='text-decoration-none text-dark small'>자주묻는질문</a></li>
            </ul>
          </Col>  
          <Col md={6}>
            <ul className='d-flex gap-3 justify-content-md-end justify-content-center p-0'>
              <li className='text-secondary'><FaGithub/></li>
              <li className='text-secondary'><FaFacebook/></li>
            </ul>
          </Col>  
        </Row>
        <Row>
          <Col className='text-center text-md-start px-3'>
            <h3 className='intro-font pb-1' style={{color:'#808080'}}>Veggie_burger</h3>
            <hr />
            <p className='small text-secondary'>
            살겠노라 살겠노라. 청산에 살겠노라.
            머루랑 다래를 먹고 청산에 살겠노라.
            얄리얄리 얄랑셩 얄라리 얄라

            우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
            너보다 시름 많은 나도 자고 일어나 우노라.
            얄리얄리 얄라셩 얄라리 얄라

            가던 새 가던 새 보았느냐. 물 아래 가던 새 보았느냐.
            이끼 묻은 쟁기를 가지고 물 아래 가던 새 보았느냐.
            얄리얄리 얄라셩 얄라리 얄라

            </p>
            <strong>
              <p className='text-secondary'>
              신한은행 채무지급보증 안내
              </p>
            </strong>
            <p className='small text-secondary'>
            당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
            <p className='small text-secondary'>
            통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 
            거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 
            내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 너한테 있습니다.
            </p> 
          </Col>  
        </Row>  
      </Container>
    </div>
  )
}

export default Footer;