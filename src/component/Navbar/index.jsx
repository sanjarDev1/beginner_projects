import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
const navigate = useNavigate();
  return (
    <div className='wrapper'>
        <div className='wrap'  onClick={()=>navigate('/')}>Temprature</div>
        <div className='wrap' onClick={()=>navigate('/basicform')}>BasicForm</div>
        <div className='wrap' onClick={()=>navigate('/shoppinglist')}>ShoppingList</div>
        <div className='wrap' onClick={()=>navigate('/quiz_app')}>QuizApp</div>
  </div>
  )
}

export default Navbar