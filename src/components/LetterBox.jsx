import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSlider from "../assets/img/LeftSlider.svg";
import RightSlider from "../assets/img/RightSlider.svg";
import "@styles/LetterBox.scss";

const ImgSlider = () => {
  const navigate = useNavigate();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [cardDataByYear, setCardDataByYear] = useState({});
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTexts, setCurrentTexts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 카드 데이터 API 호출
  const fetchCardData = async (year) => {
    try {
      const response = await fetch(`/api/cards/year/${year}`); // 현재 연도로 API 호출
      const data = await response.json();
      
      if (data.success) {
        // 연도별 카드 데이터를 설정
        setCardDataByYear(prev => ({ ...prev, [year]: data.data }));

        // 현재 연도 카드 목록 설정
        const images = data.data.map(card => card.cardImageUrl);
        const texts = data.data.map(card => `보낸 사람: ${card.sendUser}, 받은 사람: ${card.recvUser}`);
        setCurrentImages(images);
        setCurrentTexts(texts);
      }
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  };

  useEffect(() => {
    fetchCardData(currentYear); // 컴포넌트가 마운트될 때 카드 데이터 가져오기
  }, [currentYear]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
  };

  const handleImageClick = (year) => {
    setCurrentYear(year); // 클릭한 이미지의 연도로 상태 업데이트
    setCurrentIndex(0); // 슬라이드 초기화
    const images = cardDataByYear[year]?.map(card => card.cardImageUrl) || [];
    const texts = cardDataByYear[year]?.map(card => `보낸 사람: ${card.sendUser}, 받은 사람: ${card.recvUser}`) || [];
    setCurrentImages(images);
    setCurrentTexts(texts);
    navigate(`/cardselectreview/${year}`);
  };

  return (
    <div className="Img_Container">
      <div className="CardTitle">{currentTexts[currentIndex]}</div>
      <div className="Slider_box">
        <div className="SliderBox1">
            <button onClick={prevSlide}>
            <img src={LeftSlider} alt="Previous Slide" />
            </button>
            <div>
            <img
                src="/path/to/2024-image.jpg" // 2024년 카드 이미지
                alt="2024년 카드"
                onClick={() => handleImageClick(2024)}
                style={{ cursor: "pointer", margin: '0 10px' }}
            />
            </div>
            <button onClick={nextSlide}>
            <img src={RightSlider} alt="Next Slide" />
            </button>
        </div>
        <div className="SliderBox2">
            <button onClick={prevSlide}>
            <img src={LeftSlider} alt="Previous Slide" />
            </button>
            <div>
            <img
                src="/path/to/2023-image.jpg" // 2023년 카드 이미지
                alt="2023년 카드"
                onClick={() => handleImageClick(2023)}
                style={{ cursor: "pointer", margin: '0 10px' }}
            />
            </div>
            <button onClick={nextSlide}>
            <img src={RightSlider} alt="Next Slide" />
            </button>
        </div>
        <div className="SliderBox3">
            <button onClick={prevSlide}>
            <img src={LeftSlider} alt="Previous Slide" />
            </button>
            <div>
            <img
                src="/path/to/2022-image.jpg" // 2022년 카드 이미지
                alt="2022년 카드"
                onClick={() => handleImageClick(2024)}
                style={{ cursor: "pointer", margin: '0 10px' }}
            />
            </div>
            <button onClick={nextSlide}>
            <img src={RightSlider} alt="Next Slide" />
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default ImgSlider;
