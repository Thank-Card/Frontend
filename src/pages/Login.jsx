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
                loginId: id,
                password: pw
            });
            console.log(id,pw)
            console.log(response)
        }catch(error) {
            console.log(id,pw);
            console.log(error);
        }
    }
    
    function handleId(e) {
        setId(e.target.value);
        console.log(id)
    }
    function handlePw(e) {
        setPw(e.target.value);
    }

    return (
        <div className='Login_Container'>
        <Header/>
        <div className='Login_box'>
            <div className='Id_box'><input className='Id' value={id} type='text' placeholder='Id' onChange={(e) => handleId(e)}/></div>
            <div className='Pw_box'><input className='Pw' value={pw} type='text' placeholder='Password' onChange={(e) => handlePw(e)}/></div>
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
