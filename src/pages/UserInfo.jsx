import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import "@styles/UserInfo.scss";
import api from "@/api/axios"; // axios를 통해 API 호출을 관리합니다.
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({ loginId: "", name: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("/api/users/user-info", {
          withCredentials: true,
        });
        console.log(response.data.status);
        const { loginId, name } = response.data;
        setUserInfo({ loginId, name });
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await api.post("/api/users/logout", null, {
        withCredentials: true,
      });
      localStorage.removeItem("Token"); // 저장된 토큰 삭제
      console.log("로그아웃 성공");
      navigate("/login", { replace: true }); // 로그인 페이지로 이동
      window.location.reload(); // 페이지 강제 새로고침
    } catch (error) {
      console.error(
        "로그아웃 실패:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <Header />

      <h2 className="title">User Info</h2>

      <div className="user-info">
        <span className="label">Id </span>
        <span className="value">{userInfo.loginId}</span>
      </div>

      <div className="user-info">
        <span className="label">Name </span>
        <span className="value">{userInfo.name}</span>
      </div>

      <div className="Logout_btn_box">
        <form onSubmit={handleLogout}>
          <button type="submit" className="Logout_btn">
            Logout
          </button>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
