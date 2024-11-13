import React from "react";
import Header from "@components/Header";
import Button from "@components/Button";
import LetterPaper from "@components/LetterPaper";
import PersonalInfo from "@components/PersonalInfo";
import SelectImage from "@components/SelectImage";
import CardDoorWay from "@components/CardDoorWay";
import "@styles/Write.scss";

const Write = () => {
  return (
    <>
      <Header />
      <div id="Write">
        <CardDoorWay />
        <PersonalInfo />
        <LetterPaper />
        <SelectImage />
      </div>
      <Button text="카드 작성 완료" nav={"review"} />
    </>
  );
};

export default Write;
