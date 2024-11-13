import React, { useState } from "react";
import Header from "@components/Header";
import LetterPaper from "@components/LetterPaper";
import PersonalInfo from "@components/PersonalInfo";
import SelectImage from "@components/SelectImage";
import CardDoorWay from "@components/CardDoorWay";
import "@styles/Write.scss";
import LinkModal from "@components/LinkModal";

const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sendData, setSendData] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <div id="Review">
        <CardDoorWay />
        <PersonalInfo />
        <LetterPaper />
        <SelectImage />
        <LinkModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="Button_Container" id="Review_Button">
        <button className="Bottom_btn" type="button" onClick={openModal}>
          카드 전송하기
        </button>
      </div>
    </>
  );
};

export default Review;
