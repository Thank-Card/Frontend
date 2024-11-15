import React, { useEffect, useState } from 'react';
import '../styles/Join.scss';
import Header from '../components/Header';
import api from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Join = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isJoinDisabled, setIsJoinDisabled] = useState(true);
  const navigate = useNavigate();
  const cookies = new Cookies(); // 쿠키 인스턴스 생성

  const handleIdChange = (e) => { setId(e.target.value); };
  const handleNameChange = (e) => { setName(e.target.value); };
  const handlePasswordChange = (e) => { setPassword(e.target.value); };
  const handleCheckPasswordChange = (e) => { setCheckPassword(e.target.value); };

  useEffect(() => {
    if (password !== checkPassword || password === "") {
      if (id === "" || name === "")
        setIsJoinDisabled(true);
    } else {
      setIsJoinDisabled(false);
    }
  }, [password, checkPassword, id, name]);

  const joinAccount = async (event) => {
    event.preventDefault();
    const userData = {
      loginId: id,
      name: name,
      password: password,
    };
    
    try {
      const response = await api.post('/api/users/join', userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        // 서버에서 JWT 토큰을 받는다고 가정합니다.
        const token = response.data.token; // 서버에서 반환하는 토큰
        if (token) {
          // 쿠키에 토큰 저장
          cookies.set("token", `JWT ${token}`, {
            path: "/",
            sameSite: "strict",
            secure: true, // HTTPS에서만 전송되도록 설정
            httpOnly: true // JavaScript에서 접근할 수 없도록 설정
          });
        }
        alert('회원가입이 성공적으로 진행되었습니다.');
        navigate('/login');
      }
    } catch (error) {
      console.error("API 요청 오류:", error.response.data);
      if (error.response.data === "User already exist")
        alert("이미 존재하는 회원입니다.");
    }
  }

  return (
    <div className='Join_Container'> 
      <Header />
      <div className='Join_box'>
        <div className='Id_box'><input className='Id' type='text' placeholder='Id' onChange={handleIdChange} /></div>
        <div className='Name_box'><input className='Name' type='text' placeholder='Name' onChange={handleNameChange} /></div>
        <div className='Pw_box'><input className='Pw' type='password' placeholder='Password' onChange={handlePasswordChange} /></div>
        <div className='Pwc_box'><input className='Pwc' type='password' placeholder='Password Check' onChange={handleCheckPasswordChange} /></div>
      </div>
      <div className='Login_btn_box'>
        <form onSubmit={joinAccount}>
          <button type='submit' text='Join' className='Login_btn' id='Join' disabled={isJoinDisabled}>Join</button>
        </form>
      </div>
    </div>
  );
}

export default Join;