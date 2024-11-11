import React from "react";
import card from "@img/Card1.svg";

const CardMain = () => {
  let today = new Date();

  let year = today.getFullYear(); //년도
  let month = today.getMonth(); //월
  let date = today.getDate(); //날짜

  return (
    <div id="CardMain">
      <img src={card} alt="card" id="Card"/>
      <div id="CardText">
        <p id="Date">
          {year}/{month}/{date}
        </p>
        <p id="Name">Dear Name</p>
      </div>
    </div>
  );
};

export default CardMain;
