import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/header.scss";
import Opening from "@img/Opening.png";
import Mail from "@img/Mail.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  
  const navigate = useNavigate();
  
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
            <li onClick={() => handleNavigation("/login")}>Login</li>
            <li onClick={() => handleNavigation("/Join")}>Join</li>
            <li onClick={() => handleNavigation("/UserInfo")}>User Info</li>
            <li onClick={() => handleNavigation("/")}>My Letter Box</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;