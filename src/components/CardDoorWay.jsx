import React from "react";
import card from "@img/RedSnow.png";
import "@styles/CardDoorWay.scss";

const CardDoorWay = () => {

  const imageSelector = document.getElementById('image');
  console.log(imageSelector);

  return (
    <div id="CardDoorWay">
      <div>
        <img src={card} alt="card" id="Card" />
      </div>
    </div>
  );
};

export default CardDoorWay;
