import React from "react";
import api from "@/api/axios";
import Header from "@components/Header";
import LetterPaper from "@components/LetterPaper";
import PersonalInfo from "@components/PersonalInfo";
import SelectImage from "@components/SelectImage";
import CardDoorWay from "@components/CardDoorWay";
import "@styles/Write.scss";
import LinkModal from "@components/LinkModal";
import card from "@img/RedSnow.png";

const CardReviewFromLink = () => {
  useEffect(() => {
    // 컴포넌트 마운트 시 토큰 확인
    const token = localStorage.getItem("jwtToken");
    // console.log(localStorage);
    if (!token) {
      navigate("/login"); // 토큰이 없으면 로그인 페이지로 리다이렉트
    }
  }, [navigate]);

  const getCard = async (event) => {
    event.preventDefault();

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
        <CardDoorWay />
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

export default CardReviewFromLink;
