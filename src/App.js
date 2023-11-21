import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MySwiper from './component/MySwiper';
import FirstIndex from './FirstIndex';
import NavHeader from './component/NavHeader';
import SecondIndex from './SecondIndex ';
import MarqueeSild from './MarqueeSild';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <FirstIndex/>
      <MySwiper/>
      <MarqueeSild/>
      <SecondIndex/>
      <Footer/>
    </div>
  );
}

export default App;

