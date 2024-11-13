import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.scss';
import Header from '../components/Header';
import Heart1 from '../assets/img/Heart1.png'

const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const postFetchLogin = async () => {
        try {
            const response = await axios.post('http://3.38.151.193:8080/api/users/login', {
                loginId: "string",
                password: "string"
            });
        }catch(error) {
            console.log(id,pw);
            console.log(error);
        }
    }
    
    function handleId(id) {
        setId(id);
    }
    function handlePw(pw) {
        setPw(pw);
    }

    return (
        <div className='Login_Container'>
        <Header/>
        <div className='Login_box'>
            <div className='Id_box'><input className='Id' type='text' placeholder='Id' onChange={handleId}></input></div>
            <div className='Pw_box'><input className='Pw' type='text' placeholder='Password' onChange={handlePw}></input></div>
        </div>
        <div className='Join_box'>
            <img src={Heart1}></img>
            <div className='Join_btn'>join</div>
        </div>
        <div className='Login_btn_box'>
            <button type='button' text='Login' className='Login_btn' onClick={postFetchLogin}>Login</button>
        </div>
        </div>
    )
}

export default Login
