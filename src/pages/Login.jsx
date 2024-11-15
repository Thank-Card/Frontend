import React, { useState } from "react";
import axios from "@/api/axios";
import "../styles/Login.scss";
import Header from "../components/Header";
import Heart1 from "../assets/img/Heart1.png";
import { setCookie } from "@/api/Cookies";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const postFetchLogin = async (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    //console.log("Try Login");
    try {
      const response = await axios.post(
        "/api/users/login",
        { loginId: id, password: pw },
        {
          withCredentials: true,
        }
      );
      if (response.headers.getAuthorization()) {
        console.log("token 저장");
        setCookie("token", `${response.headers.getAuthorization()}`, {
          path: "/",
          sameSite: "strict",
        });
      }
      console.log("로그인 성공:", response);
    } catch (error) {
      console.error("API 호출 에러", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="Login_Container">
      <Header />
      <div className="Login_box">
        <div className="Id_box">
          <input
            className="Id"
            value={id}
            type="text"
            placeholder="Id"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="Pw_box">
          <input
            className="Pw"
            value={pw}
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
      </div>
      <div className="Join_box">
        <img src={Heart1} alt="Heart" />
        <div className="Join_btn">join</div>
      </div>
      <div className="Login_btn_box">
        <form onSubmit={postFetchLogin}>
          <button type="submit" className="Login_btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;