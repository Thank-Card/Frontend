import React from 'react'
import '../styles/button.scss'

const Button = ({ text, onClick }) => {
  return (
    <div className='Button_Container'>
        <button className='Bottom_btn' onClick={onClick}>
             {text}
        </button>
    </div>
    
  )
}

export default Button
