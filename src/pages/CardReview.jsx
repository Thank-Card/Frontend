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
  const [image, setImage] = useState(card);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendMessage = () => {
    setSendData(true);
  }

  const Image = useSelector((state) => {
    return state.image;
  });

  const getData = async(endpoint) => {
    try{
      const response = await api.get(endpoint);
      return response.data;
    } catch(error){
      console.error('Get 요청 오류: ', error);
      throw error;
    }
  }

  useEffect(() => {
    // console.log(sendConfirm);
    if (sendConfirm) {
      setImage(Image);
      console.log(getData('api/cards/images/categorys'));
    }
  }, [sendConfirm]);

  const disableInput = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.disable = true;
    });
  }
 
  return (
    <>
      <Header />
      <div id="Review">
        <CardDoorWay sendConfirm={sendData}/>
        <PersonalInfo />
        <LetterPaper />
        <SelectImage />
        <LinkModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="Button_Container" id="Review_Button">
        <button className="Bottom_btn" type="button" onClick={()=>{openModal(); sendMessage();}}>
          카드 전송하기
        </button>
      </div>
      <form method="post" action="/api/cards/send" encType="multipart/form-data">
        {/* <input type="text" name="sendUser" value={}/>
        <input type="text" name="content" value={}/>
        <input type="text" name="userImage" value={}/>
        <input type="text" name="recvUser" value={}/>
        <input type="text" name="createdAt" value={}/> */}
      </form>
    </>
  );
};

export default Review;
