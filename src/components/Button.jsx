import React from "react";
import { useNavigate } from "react-router-dom";
import "@styles/button.scss";

const Button = ({ text, nav }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (nav) {
      navigate("/" + nav);
    }
  };

  return (
    <div className="Button_Container">
      <button
        className="Bottom_btn"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;