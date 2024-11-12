import React from "react";
import card from "@img/RedSnow.png";
import "@styles/cardmain.scss";

const CardMain = ({ When, PI, Line }) => {
  return (
    <div id="CardMain">
      {When}
      <div>
        <img src={card} alt="card" id="Card" />
        {PI}
      </div>
      {Line}
    </div>
  );
};

export default CardMain;
