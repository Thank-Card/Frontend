import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import "@styles/UserInfo.scss";
import axios from "axios"; // axios를 통해 API 호출을 관리합니다.

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({ id: "", name: "" });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/api/users");
        const { loginId, name } = response.data;
        setUserInfo({ loginId, name });
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <Header />

      <h2 className="title">User Info</h2>

      <div className="user-info">
        <span className="label">Id</span>
        <span className="value">{userInfo.loginId}</span>
      </div>

      <div className="user-info">
        <span className="label">Name</span>
        <span className="value">{userInfo.name}</span>
      </div>
    </>
  );
};

export default UserInfo;
