import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api, { getToken } from "@/api/axios";
import Header from "@components/Header";
import LetterPaper from "@components/LetterPaper";
import PersonalInfo from "@components/PersonalInfo";
import SelectImage from "@components/SelectImage";
import CardDoorWay from "@components/CardDoorWay";
import "@styles/Write.scss";
import LinkModal from "@components/LinkModal";
import card from "@img/RedSnow.png";

const Review = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sendData, setSendData] = useState(false);
  const image = useSelector((state) => state.image);
  const from = useSelector((state) => state.sendUser);
  const content = useSelector((state) => state.text);
  const dear = useSelector((state) => state.recvUser);

  useEffect(() => {
    if (!getToken()) {
      navigate("/login"); // 토큰이 없으면 로그인 페이지로 리다이렉트
    }
  }, [navigate]);

  const cardImageId = 2;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    setSendData(true);

    const formData = new FormData();

    const cardData = {
      content,
      cardImageId,
      from,
      dear,
    };

    // console.log(cardData);

    //이미지 데이터 추가
    formData.append(
      "card",
      new Blob([JSON.stringify(cardData)], { type: "application/json" })
    );
    formData.append("image", image);

    // console.log(formData.keys(0));
    // console.log(formData.values(0));

    try {
      const response = await api.post("/api/cards/send", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        console.log("카드 전송 성공:", response.data);
        openModal();
      } else {
        console.error("카드 전송 실패:", response.data.message);
      }
    } catch (error) {
      console.error("API 요청 오류:", error);
      if (error.response && error.response.status === 401) {
        // 인증 오류 시 로그인 페이지로 리다이렉트
        navigate("/login");
      }
    }
  };

  return (
    <>
      <Header />
      <div id="Review">
        <CardDoorWay sendConfirm={sendData} />
        <PersonalInfo />
        <LetterPaper />
        <SelectImage />
        <LinkModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="Button_Container" id="Review_Button">
        <form onSubmit={sendMessage}>
          <button className="Bottom_btn" type="submit">
            카드 전송하기
          </button>
        </form>
      </div>
    </>
  );
};

export default Review;
