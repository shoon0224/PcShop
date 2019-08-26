import React from 'react';
import './Contents.css';
import v15 from '../Image/v15.jpg'
import v16 from '../Image/v16.jpg'
import v17 from '../Image/v17.jpg'
import v18 from '../Image/v18.jpg'
import mac from '../Image/mac.png'
import macbook from '../Image/macbook.png'
import ipad from '../Image/ipad.png'
import { Slide } from 'react-slideshow-image';


const properties = {
  duration: 2000,
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`광고 넘어간데이 ${oldIndex} to ${newIndex}`);
  }
}

const Contents = () => {
  return (
    <div className="container">
      <div>
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div className="slideimage" style={{ 'backgroundImage': `url(${v15})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div className="slideimage" style={{ 'backgroundImage': `url(${v16})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div className="slideimage" style={{ 'backgroundImage': `url(${v17})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div className="slideimage" style={{ 'backgroundImage': `url(${v18})` }}>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <div style={{width:'100%', height:'500px'}}>
        <figure style={{ float: 'left' }} className="snip1432">
          <img src={mac} alt="데스크탑" />
          <figcaption>
            <div>
              <h3>고성능</h3>
              <h3>보러가기</h3>
            </div>
            <div>
              <h2>데스크탑</h2>
            </div>
          </figcaption>          
          <a href="/ItemList"></a>
        </figure>
        <figure style={{ float: 'left' }} className="snip1432">
          <img src={macbook} alt="노트북" />
          <figcaption>
            <div>
              <h3>휴대용</h3>
              <h3>보러가기</h3>
            </div>
            <div>
              <h2>노트북</h2>
            </div>
          </figcaption>
          <a href="/ItemList"></a>
        </figure>
        <figure  style={{float: 'left' }} className="snip1432">
          <img src={ipad} alt="모니터" />
          <figcaption>
            <div>
              <h3>한손에</h3>
              <h3>보러가기</h3>
            </div>
            <div>
              <h2>태블릿</h2>
            </div>
          </figcaption>
          <a href="/ItemList"></a>
        </figure>
      </div>
    </div>
  );
}

export default Contents;