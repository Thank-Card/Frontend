import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/header.scss";
import Opening from "@img/Opening.png";
import Mail from "@img/Mail.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const navigate = useNavigate();

  // 로그인 상태 확인
  useEffect(() => {
    const token = localStorage.getItem("Token"); // 토큰 확인
    setIsLoggedIn(!!token); // 토큰이 있으면 true
  }, []);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="Header_Container">
      <img
        src={Opening}
        className="Logo"
        alt="Logo"
        onClick={() => handleNavigation("/")}
      />
      <div className="Nav" onClick={toggleList}>
        <img src={Mail} className="Nav_ico" alt="Mail" />
      </div>
      {isOpen && (
        <div className="Nav_list">
          <ul className="List_drop">
            {/* 로그인 여부에 따라 Login, Join 조건부 렌더링 */}
            {!isLoggedIn && (
              <>
                <li onClick={() => handleNavigation("/login")}>Login</li>
                <li onClick={() => handleNavigation("/Join")}>Join</li>
              </>
            )}
            {/* 항상 보이는 메뉴 */}
            <li onClick={() => handleNavigation("/UserInfo")}>User Info</li>
            <li onClick={() => handleNavigation("/letterbox")}>
              My Letter Box
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
