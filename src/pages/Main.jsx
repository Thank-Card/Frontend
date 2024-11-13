import React from "react";
import Header from "@components/Header";
import Button from "@components/Button";
import "@styles/main.scss";
import Heart from "@img/Heart.png";

const Main = () => {
  return (
    <>
      <Header />
      <div className="Main_Container">
        <p>어김없이 돌아온 연말</p>
        <p>
          <img src={Heart} alt="하트 이미지"/>따뜻한 마음을 담아,
        </p>
        <p>소중한 사람에게 감사 카드를 전해보세요.</p>
      </div>
      <Button text="마음 전하러 가기" nav={"write"}/>
    </>
  );
};

export default Main;
