// App.jsx
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import img from './assets/img.jpg';
import img2 from './assets/img2.avif';
import img4 from './assets/imf3.jpg';
import './assets/bg.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="text">Biz bilan 1000+ o'quvchi sertifikatli bo‘ldi</h1>

      <Parallax speed={-10} className='t'>
        <img src={img} alt="Image 1" className="image image1" />
      </Parallax>

      <Parallax speed={10} className='t'>
        <img src={img2} alt="Image 2" className="image image2" />
      </Parallax>

      <Parallax speed={-20}>
        <img src={img4} alt="Image 3" className="image image3" />
      </Parallax>

      <Parallax speed={20}>
        <img src={img} alt="Image 4" className="image image4" />
      </Parallax>

      <Parallax speed={-15}>
        <img src={img4} alt="Image 5" className="image image5" />
      </Parallax>

      <Parallax speed={25}>
        <img src={img2} alt="Image 6" className="image image6" />
      </Parallax>

      <Parallax speed={-10}>
        <img src={img} alt="Image 7" className="image image7" />
      </Parallax>

      <Parallax speed={-10} className='t'>
        <img src={img2} alt="Image 8" className="image image8" />
      </Parallax>

      <Parallax speed={-10} >
        <img src={img} alt="Image 9" className="image image9" />
      </Parallax>
    </div>
  );
};

export default App;
