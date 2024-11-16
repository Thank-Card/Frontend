import React, { useEffect, useState } from 'react';
import '../styles/Join.scss';
import Header from '../components/Header';
import api from '@/api/axios';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isJoinDisabled, setIsJoinDisabled] = useState(true);
  const navigate = useNavigate();

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