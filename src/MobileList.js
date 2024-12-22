import React, { useState } from 'react';
import './Mobile.css';

export default function MobileList(props) {
    const [count, setCount] = useState(0);

    // Function to handle increment
    const handleClick = () => {
        setCount(count + 1);
    };

    // Function to handle decrement
    const handleDecrement = () => {
        setCount(count > 0 ? count - 1 : 0); // Prevent negative counts
    };

    const { image, title, price } = props;

    return (
        <div className='Main'>
            <img className='image' src={image} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{price}</p>
                <button>Add to cart</button>
            </div>
            <div>
                <h1>{count}</h1>
                <button onClick={handleClick}>+</button>
                <button onClick={handleDecrement}>-</button> {/* Decrement button */}
            </div>
        </div>
    );
}
