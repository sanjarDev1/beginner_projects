import React, {useState} from 'react'
import './style.css'

const Temprature = () => {
  const [tempratureValue, setTempratureValue] = useState(10);
  const [tempratureColor, setTempratureColor] = useState("hot")
  const increaseTemprature = ()=>{
    if (tempratureValue ===30) return;
    const newTemprature = tempratureValue + 1
    newTemprature >= 15 && setTempratureColor('hot');
    
    setTempratureValue(newTemprature)
  }

  const decreaseTemprature = ()=>{
    if (tempratureValue === 0) return;
    const newTemprature = tempratureValue -1 
    newTemprature < 15 && setTempratureColor('cold');
    
    setTempratureValue(newTemprature)
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
          <div className={`
          temperature-display cold
           ${tempratureColor}`}>
             {tempratureValue}°C
          </div>
      </div>
      <div className="button-container">
        <button className='buttonnn' onClick={()=>increaseTemprature() }>+</button>
        <button className='buttonnn' onClick={()=>decreaseTemprature()}>-</button>
      </div>

    </div>
    )
}

export default Temprature