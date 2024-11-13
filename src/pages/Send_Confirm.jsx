import React from "react";
import Header from "@components/Header";
import Button from "@components/Button";
import "@styles/Send_Confirm.scss";
import Heart from "@img/Heart.png";

const SendConfirm = () => {
  const createRadius = () => {
    return Array(3)
      .fill()
      .map((_, index) => (
        <div key={index} className="radius" id={`radius_${index}`}></div>
      ));
  };

  return (
    <>
      <Header />
      <div id="Send_Confirm">
        <div id="radius_set">{createRadius()}</div>
        <div id="Send_message">
          <p>
            <img src={Heart} alt="하트이미지" />
            마음을 담은
          </p>
          <p>카드의</p>
          <p>전송이 완료되었습니다.</p>
          <p id="Send_End">From Opening</p>
        </div>
      </div>
    </>
  );
};

export default SendConfirm;
