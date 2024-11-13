import React, { useContext } from "react";
import card from "@img/RedSnow.png";
import "@styles/CardDoorWay.scss";
import { ImageContext } from "./ImageContext";

const CardDoorWay = () => {
  const Image = useContext(ImageContext).image;

  return (
    <div id="CardDoorWay">
      <div>
        {Image ? (
          <img src={Image} alt="설정한 이미지" id="Photo" />
        ) : (
          <img src={card} alt="card" id="Card" />
        )}
      </div>
    </div>
  );
};

export default CardDoorWay;
