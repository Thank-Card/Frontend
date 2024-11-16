import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import "@styles/UserInfo.scss";
import api from "@/api/axios"; // axios를 통해 API 호출을 관리합니다.
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({ loginId: "", name: "" });
  const navigate = useNavigate();

  // 사용자 정보 가져오기
  const fetchUserInfo = async () => {
    try {
      const response = await api.get("/api/users/user-info", {
        withCredentials: true,
      });
      const { loginId, name } = response.data;
      setUserInfo({ loginId, name });
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      setUserInfo({ loginId: "", name: "" }); // 초기화
    }
  };

  useEffect(() => {
    fetchUserInfo();
    return () => {
      // 컴포넌트 언마운트 시 상태 초기화
      setUserInfo({ loginId: "", name: "" });
    };
  }, []);

  // 로그아웃 처리
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await api.post("/api/users/logout", null, {
        withCredentials: true,
      });
      localStorage.removeItem("Token"); // 저장된 토큰 삭제
      console.log("로그아웃 성공");
      setUserInfo({ loginId: "", name: "" }); // 사용자 정보 초기화
      navigate("/login", { replace: true }); // 로그인 페이지로 이동
    } catch (error) {
      console.error(
        "로그아웃 실패:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // 계정 삭제 처리
  const handleDeleteId = async (event) => {
    event.preventDefault();
    try {
      const confirmation = window.confirm("정말로 계정을 삭제하시겠습니까?");
      if (!confirmation) return;

      await api.delete("/api/users", {
        withCredentials: true,
      });
      localStorage.removeItem("Token"); // 삭제 후 토큰 제거
      console.log("계정 삭제 성공");
      navigate("/join", { replace: true }); // 회원가입 페이지로 이동
    } catch (error) {
      console.error(
        "계정 삭제 실패:",
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
        <span className="value">{userInfo.loginId || "Loading..."}</span>
      </div>

      <div className="user-info">
        <span className="label">Name </span>
        <span className="value">{userInfo.name || "Loading..."}</span>
      </div>

      <div className="Logout_btn_box">
        {/* 로그아웃 버튼 */}
        <form onSubmit={handleLogout}>
          <button type="submit" className="Logout_btn">
            Logout
          </button>
        </form>

        {/* Delete ID 버튼 */}
        <form onSubmit={handleDeleteId}>
          <button type="submit" className="Delete_btn">
            Delete ID
          </button>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
