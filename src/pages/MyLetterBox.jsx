import React, { useEffect, useState } from 'react';
import '@styles/MyLetterBox.scss'
import Header from '../components/Header';
import Heart from "@img/Heart.png";
import LetterBox from '@components/LetterBox'
import api from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const MyLetterBox = () => {
  const [sendCount, setSendCount] = useState(0);
  const [recvCount, setRecvCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies(); // 쿠키 인스턴스 생성

  // 주고 받은 카드 개수 조회
  const fetchCardCounts = async () => {
    try {
      const response = await api.get('/api/cards/counts'); 
      if (response.data.success) {
        setSendCount(response.data.data.sendCount);
        setRecvCount(response.data.data.recvCount);
      } else {
        setErrorMessage('데이터 조회에 실패했습니다.');
      }
    } catch (error) {
      console.error("API 요청 오류:", error);
      setErrorMessage("카드 개수를 가져오는 데 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchCardCounts(); // 컴포넌트가 마운트될 때 카드 개수 조회
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
        {errorMessage && <p className="error">{errorMessage}</p>}
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
