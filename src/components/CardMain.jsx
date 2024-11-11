import React from "react";
import card from "@img/Card1.svg";
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
