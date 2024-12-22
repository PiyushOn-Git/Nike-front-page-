import React from 'react';
import './Main.css';
import Hero from './Nike-shoes.png'; 

function Main() {
  return (
    <div className='main-section'>
      <div className='main-text'>
        <h1>Your Feet<br/> Deserve<br/> The Best</h1>
        <h3>Your feet deserve the best and we are here to<br/>
            help you with our shoes. Your feet deserve<br/>
            the best and we are here to help you with our<br/>
            shoes.</h3>
            <button>shop Now</button> 
            <button>category</button> 
      </div>
      <div className='main-image'>
        <img src={Hero} alt='Nike shoes' /> 
      </div>
    </div>
  );
}

export default Main;

