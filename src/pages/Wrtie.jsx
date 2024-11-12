import React from "react";
import Header from "@components/Header";
import Button from "@components/Button";
import LetterPaper from "@components/LetterPaper";
import PersonalInfo from "@components/PersonalInfo";
import SelectImage from "@components/SelectImage";
import CardDoorWay from "@components/CardDoorWay";
import "@styles/Write.scss";
import { ImageProvider } from "../components/ImageContext";

const Write = () => {
  return (
    <>
      <Header />
      <div id="Write">
        <ImageProvider>
          <CardDoorWay />
          <PersonalInfo />
          <LetterPaper />
          <SelectImage />
        </ImageProvider>
      </div>
      <Button text="카드 작성 완료" />
    </>
  );
};

export default Write;
