import React, { useState } from "react";
import "../styles/header.scss";
import Opening from "../assets/img/Opening.svg";
import Mail from "../assets/img/Mail.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  return (
      <div className="Header_Container">
        <img src={Opening} className="Logo" alt="Logo"></img>
        <div className="Nav" onClick={toggleList}>
          <img src={Mail} className="Nav_ico" alt="Mail"></img>
        </div>
        {isOpen && (
          <div className="Nav_list">
            <ul className="List_drop">
              <li>Login</li>
              <li>Join</li>
              <li>User Info</li>
              <li>My Letter Box</li>
            </ul>
          </div>
        )}
      </div>
  );
};

export default Header;
