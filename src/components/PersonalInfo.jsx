import React from "react";
import "@styles/PersonalInfo.scss";

const PersonalInfo = () => {
  let today = new Date();

  let year = today.getFullYear(); //년도
  let month = today.getMonth(); //월
  let date = today.getDate(); //날짜

  return (
    <div id="PersonalInfo">
      <p id="Date">
        {year}/{month}/{date}
      </p>
      <p id="Name">Dear SAKUYA</p>
    </div>
  );
};

export default PersonalInfo;