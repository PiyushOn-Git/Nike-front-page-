import React from 'react';
import logo from './Nike-logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Nike logo" />
            <div className='nav-comp'>
                <h3>Menu</h3>
                <h3>Location</h3>
                <h3>About</h3>
                <h3>Contact</h3>
            </div>
            <button>Login</button>
        </div>
    );
};

export default Nav;
