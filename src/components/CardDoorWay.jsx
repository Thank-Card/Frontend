import React from "react";
import { useSelector } from "react-redux";
import card from "@img/RedSnow.png";
import "@styles/CardDoorWay.scss";

const CardDoorWay = () => {
  const Image = useSelector((state) => {
    //console.log(state);
    return state.image;
  });

  //console.log(Image);

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
