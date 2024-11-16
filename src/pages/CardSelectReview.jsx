import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Header from "../components/Header";
import Button from "@components/Button";
import api from '@/api/axios';
import styles from "../styles/CardSelect.module.scss"; // 파일 이름 확인

const CardSelectReview = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const selectedImage = location.state?.selectedImage; // 전달받은 이미지
  const cardId = location.state?.cardId; // 전달받은 카드 ID
  const [cardData, setCardData] = useState(null); // 카드 데이터를 저장할 상태

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await api.get(`/api/cards/${cardId}/simple`);
        const data = response;
        if (response.data.success) {
          setCardData(response.data.data); // 카드 데이터 설정
        } else {
          console.error("카드 조회 실패:", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    if (cardId) {
      fetchCardData();
    }
  }, [cardId]); // cardId가 변경될 때마다 호출

  // 카드 읽기 버튼 클릭 시 상세보기 페이지로 이동
  const handleButtonClick = () => {
    navigate('/cardreview'); // 카드 상세보기 페이지로 이동
  };

  return (
    <>
      <Header />
      <div className={styles.Select}>
        <div className={styles.CardText}>크리스마스 카드🎄</div>
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected Card"
            className={styles.SelectedImage}
          />
        ) : (
          <p>선택된 카드가 없습니다.</p>
        )}
        
        {/* 카드 데이터 출력 */}
        {cardData ? (
          <div className={styles.CardDetails}>
            <p>보낸 사람: {cardData.sendUser}</p>
            <p>받는 사람: {cardData.recvUser}</p>
            <p>카드 생성일: {new Date(cardData.createdAt).toLocaleString()}</p>
            <img src={cardData.cardImageUrl} alt="카드 이미지" />
          </div>
        ) : (
          <p>카드 정보를 가져오는 중...</p>
        )}

        <div className={styles.SelectButton}>
          {/* Button 컴포넌트에 클릭 핸들러 추가 */}
          <Button text="카드 읽기" onClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
};

export default CardSelectReview;
