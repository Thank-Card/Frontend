import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Piggy from '@img/Piggy.png'
import RedSnow from '@img/RedSnow.png'
import SnowMan from '@img/SnowMan.png'
import LeftSlider from '../assets/img/LeftSlider.svg'
import RightSlider from '../assets/img/RightSlider.svg'
import '@styles/ImgSlider.scss'


const images = [
    Piggy, RedSnow, SnowMan
]

const ImgSlider = ( {text, nav} ) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
  return (
    <div className='Img_Container'>
      <div className='CardTitle'>{text}크리스마스 카드</div>
      <div className="Slider_box">
        <button onClick={prevSlide}>
            <img src={LeftSlider}></img>
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button onClick={nextSlide}>
            <img src={RightSlider}></img>
        </button>
      </div>
    </div>
  )
}

export default ImgSlider;
