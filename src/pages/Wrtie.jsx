import React from "react";
import Header from "@components/Header";
import Button from "@components/Button";
import CardMain from "@components/CardMain";
import Gallery from "@img/Gallery.svg";

const WriteSub = () => {
  let today = new Date();

  let year = today.getFullYear(); //년도
  let month = today.getMonth(); //월
  let date = today.getDate(); //날짜

  return (
    <div>
      <p id="Date">
        {year}/{month}/{date}
      </p>
      <p id="Name">Dear SAKUYA</p>
    </div>
  );
};

const WriteMain = () => {
  return (
    <div id="WriteMain">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <p key={index} className="underline" />
        ))}
      <div id="image">
        <img src={Gallery} alt="Gallery" />
        img 입력
      </div>
      <div id="From">
        <span>From Sihyun</span>
      </div>
    </div>
  );
};

const Write = () => {
  return (
    <>
      <Header />
      <CardMain PI={<WriteSub />} Line={<WriteMain />} />
      <Button text="카드 작성 완료" />
    </>
  );
};

export default Write;
