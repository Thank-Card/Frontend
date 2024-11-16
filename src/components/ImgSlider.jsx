import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Piggy from "@img/Piggy.png";
import RedSnow from "@img/RedSnow.png";
import SnowMan from "@img/SnowMan.png";
import YearEnd from "@img/YearEnd.png";
import Tree from "@img/Tree.png";
import ThankCard from "@img/ThankCard.png";
import Star from "@img/SnowMan.png";
import Present from "@img/Present.png";
import LeftSlider from "../assets/img/LeftSlider.svg";
import RightSlider from "../assets/img/RightSlider.svg";
import "@styles/ImgSlider.scss";

const images1 = [RedSnow, Tree, SnowMan];
const images2 = [Piggy, YearEnd, ThankCard];
const images3 = [Present, Star];

const images = [images1, images2, images3];
const texts = [
  ["크리스마스 카드🎄", "크리스마스 카드🎄", "크리스마스 카드🎄"],
  ["연말 카드🎴", "연말 카드🎴", "연말 카드🎴"],
  ["지금 인기있는 카드✨", "지금 인기있는 카드✨"],
];

const ImgSlider = ({ id }) => {
  const navigate = useNavigate();
  const initialIndex = parseInt(id) - 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState(images[initialIndex]);
  const [currentTexts, setCurrentTexts] = useState(texts[initialIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentImages.length) % currentImages.length
    );
  };

  const handleImageClick = () => {
    navigate("/CardSelect", {
      state: {
        selectedImage: currentImages[currentIndex],
        CardText: currentTexts[currentIndex], // 현재 이미지에 해당하는 텍스트 전달
      },
    });
  };

  const handleImageSetChange = (index) => {
    setCurrentIndex(0);
    setCurrentImages(images[index]);
    setCurrentTexts(texts[index]);
  };

  return (
    <div className="Img_Container">
      <div className="Slider_box">
        <button onClick={prevSlide} className="SliderBtn">
          <img src={LeftSlider} alt="Previous Slide" />
        </button>
        <div>
          <div className="CardTitle">{currentTexts[currentIndex]}</div>
          <img
            src={currentImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
        </div>
        <button onClick={nextSlide} className="SliderBtn">
          <img src={RightSlider} alt="Next Slide" />
        </button>
      </div>

      <div className="ImageSetSelector">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageSetChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
