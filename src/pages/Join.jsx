import React, { useState } from 'react'
import '../styles/Join.scss'
import Header from '../components/Header';
import axios from 'axios';

const Join = () => {
    const [ id, setId ] = useState("");
    const [ name, setName ] = useState("");
    const [ pw, setPw ] = useState("");

    const postFetchJoin = async () => {
        try {
            const response = await axios.post('http://3.38.151.193:8080/api/users/login', {
                loginId: "string",
                name: "string",
                password: "string"
            });
            console.log(id, name, pw)
            console.log(response)
        }catch(error) {
            console.log(id, name, pw);
            console.log(error);
        }
    }
    function handleId(e) {
        setId(e.target.value);
        console.log(id)
    }
    function handleName(e) {
        setName(e.target.value);
        console.log(name)
    }
    function handlePw(e) {
        setPw(e.target.value);
        console.log(pw)
    }


  return (
    <div className='Join_Container'> 
      <Header/>
      <div className='Join_box'>
        <div className='Id_box'><input className='Id' type='text' placeholder='Id' onChange={(e) => handleId(e)}></input></div>
        <div className='Name_box'><input className='Name' type='text' placeholder='Name' onChange={(e) => handleName(e)}></input></div>
        <div className='Pw_box'><input className='Pw' type='text' placeholder='Password' onChange={(e) => handlePw(e)}></input></div>
        <div className='Pwc_box'><input className='Pwc' type='text' placeholder='Password Check'></input></div>
      </div>
      <div className='Login_btn_box'>
        <button type='button' text='Join' className='Login_btn' onClick={postFetchJoin}>Join</button>
      </div>
    </div>
  )
}

export default Join
