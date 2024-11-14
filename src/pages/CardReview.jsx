import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "@/api/axios";
import Header from "@components/Header";
import LetterPaper from "@components/LetterPaper";
import PersonalInfo from "@components/PersonalInfo";
import SelectImage from "@components/SelectImage";
import CardDoorWay from "@components/CardDoorWay";
import "@styles/Write.scss";
import LinkModal from "@components/LinkModal";
import card from "@img/RedSnow.png";

const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sendData, setSendData] = useState(false);
  const [sendConfirm, setSendConfirm] = useState(false);
  const image = useSelector((state) => state.image);
  const sendUser = useSelector((state) => state.sendUser);
  const content = useSelector((state) => state.text);
  const recvUser = useSelector((state) => state.recvUser);
  const createAt = useSelector((state) => state.sendDate);

  // console.log(sendUser);
  // console.log(content);
  // console.log(image);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendMessage = () => {
    setSendData(true);
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
        <form
          method="post"
          action="/api/cards/send"
          encType="multipart/form-data"
        >
          <input type="text" name="sendUser" value={sendUser} />
          <input type="text" name="content" value={content} />
          <input type="text" name="userImage" value={image} />
          <input type="text" name="recvUser" value={recvUser} />
          <input type="text" name="createdAt" value={createAt} />
          <button
            className="Bottom_btn"
            type="submit"
            onClick={() => {
              openModal();
              sendMessage();
            }}
          >
            카드 전송하기
          </button>
        </form>
      </div>
    </>
  );
};

export default Review;
