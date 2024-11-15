import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Piggy from "@img/Piggy.png";
import RedSnow from "@img/RedSnow.png";
import SnowMan from "@img/SnowMan.png";
import LeftSlider from "../assets/img/LeftSlider.svg";
import RightSlider from "../assets/img/RightSlider.svg";
import "@styles/ImgSlider.scss";

const images = [Piggy, RedSnow, SnowMan];

const ImgSlider = ({ text }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageClick = () => {
    // 선택한 이미지를 CardSelect로 전달
    navigate("/CardSelect", { state: { selectedImage: images[currentIndex] } });
  };

  return (
    <div className="Img_Container">
      <div className="Slider_box">
        <button onClick={prevSlide}>
          <img src={LeftSlider} alt="Previous Slide" />
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
        <button onClick={nextSlide}>
          <img src={RightSlider} alt="Next Slide" />
        </button>
      </div>
    </div>
  );
};

export default ImgSlider;
