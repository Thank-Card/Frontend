import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import LetterPaper from "@components/LetterPaper";
import PersonalInfo from "@components/PersonalInfo";
import SelectImage from "@components/SelectImage";
import CardDoorWay from "@components/CardDoorWay";
import "@styles/Write.scss";
import { useParams } from "react-router-dom";
import api from "@/api/axios";

const CardReviewFromLink = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);

  console.log(id);

  useEffect(() => {
    const updateCard = async () => {
      try {
        const cardInfo = await api.get(`/api/cards/${id}/detail`);
        console.log(cardInfo);
        setCardData(cardInfo.data); // 카드 데이터를 상태로 업데이트
      } catch (error) {
        console.error("API 호출 에러: ", error);
      }
    };
  
    updateCard();
  }, [id]);
  
  return (
    <>
      <Header />
      <div id="cardReviewFromLink">
        <CardDoorWay />
        <PersonalInfo />
        <LetterPaper />
        <SelectImage />
      </div>
      <div className="Button_Container" id="Review_Button">
      </div>
    </>
  );
};

export default CardReviewFromLink;
