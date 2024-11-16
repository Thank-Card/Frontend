import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import LetterBox from "@components/LetterBox";
import "@styles/MyLetterBox.scss";
import Heart from "@img/Heart.png";

const MyLetterBox = () => {
  const [username, setUsername] = useState(''); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [sendCount, setSendCount] = useState(0);
  const [recvCount, setRecvCount] = useState(0);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername('사용자 이름');
  };

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('http://3.38.151.193.8080'); 
        const data = await response.json();

        if (data.success) {
          setSendCount(data.data.sendCount);
          setRecvCount(data.data.recvCount);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []); 

  return (
    <>
      <Header />
      <div className="Main_Container">
        <p>지금까지</p>
        <p>주고, 받은 카드</p>
        <p>
          <img src={Heart} alt="하트 이미지"/> 총 {sendCount + recvCount}장
        </p>
        <div className="FromMsg">
          {isLoggedIn ? (
            <p>from. {username}</p>
          ) : (
            <p>from. Opening</p>
          )}
        </div>
        <LetterBox />
      </div>
    </>
  );
};

export default MyLetterBox;
