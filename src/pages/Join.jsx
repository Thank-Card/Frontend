import React from 'react'
import '../styles/Join.scss'
import Header from '../components/Header';

const Join = () => {
  return (
    <div className='Join_Container'> 
      <Header/>
      <div className='Join_box'>
        <div className='Id_box'><input className='Id' type='text' placeholder='Id'></input></div>
        <div className='Name_box'><input className='Name' type='text' placeholder='Name'></input></div>
        <div className='Pw_box'><input className='Pw' type='text' placeholder='Password'></input></div>
        <div className='Pwc_box'><input className='Pwc' type='text' placeholder='Password Check'></input></div>
      </div>
      <div className='Login_btn_box'>
        <button type='button' text='Join' className='Login_btn'>Join</button>
      </div>
    </div>
  )
}

export default Join
