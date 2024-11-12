import React, { useState } from "react";
import "@styles/header.scss";
import Opening from "@img/Opening.png";
import Mail from "@img/Mail.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  return (
      <div className="Header_Container">
        <img src={Opening} className="Logo" alt="Logo"/>
        <div className="Nav" onClick={toggleList}>
          <img src={Mail} className="Nav_ico" alt="Mail"/>
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
