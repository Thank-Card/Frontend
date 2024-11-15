import React, { useEffect, useState } from 'react'
import '../styles/Join.scss'
import Header from '../components/Header';
import api from '@/api/axios';

const Join = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isJoinDisabled, setIsJoinDisabled] = useState(true);
  
  const handleIdChange = (e) => {setId(e.target.value)};
  const handleNameChange = (e) => {setName(e.target.value)};
  const handlePasswordChange = (e) => {setPassword(e.target.value)};
  const handleCheckPasswordChange = (e) => {setCheckPassword(e.target.value)};

  useEffect(()=>{
    if(password!=checkPassword || password===""){ //비밀번호 일치하지 않을 때 코드 작성해주세요.
      if(id==="" || name==="")
        setIsJoinDisabled(true);
    } else{
        setIsJoinDisabled(false);
    }
  },[password, checkPassword, id, name]);

  const joinAccount = async(event) => {
    event.preventDefault();
    //console.log(typeof(id), typeof(name), typeof(password));
    const userData = {
        loginId: id,
        name: name,
        password: password,
      };
    console.log(userData);
    try {
      const response = await api.post('/api/users/join', userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("API 요청 오류:", error.response.data);
    }
  }

  return (
    <div className='Join_Container'> 
      <Header/>
      <div className='Join_box'>
        <div className='Id_box'><input className='Id' type='text' placeholder='Id' onChange={handleIdChange}></input></div>
        <div className='Name_box'><input className='Name' type='text' placeholder='Name' onChange={handleNameChange}></input></div>
        <div className='Pw_box'><input className='Pw' type='password' placeholder='Password' onChange={handlePasswordChange}></input></div>
        <div className='Pwc_box'><input className='Pwc' type='text' placeholder='Password Check' onChange={handleCheckPasswordChange}></input></div>
      </div>
      <div className='Login_btn_box'>
        <form onSubmit={joinAccount}>
          <button type='submit' text='Join' className='Login_btn' id='Join' disabled={isJoinDisabled}>Join</button>
        </form>
      </div>
    </div>
  )
}

export default Join