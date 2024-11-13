import React from "react";
import Header from "@components/Header";
import "@styles/UserInfo.scss";

const UserInfo = () => {
  return (
    <>
      <Header />

      <h2 className="title">User Info</h2>

      <div className="user-info">
        <span className="label">Id</span>
        <span className="value">test1234@naver.com</span>
      </div>

      <div className="user-info">
        <span className="label">Name</span>
        <span className="value">Sihyun Park</span>
      </div>
    </>
  );
};

export default UserInfo;
