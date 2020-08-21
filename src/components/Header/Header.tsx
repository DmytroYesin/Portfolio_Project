import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';


const Header = () => (
    <header>
        <nav>
            <div className="nav_bar_ul">
                <div className="menuItem"><Link to='/'><img className="nav_bar_icon" src="/public/images/home.png" alt="home"/>Home</Link></div>
                <div className="menuItem"><Link to='/about-me'>About Me</Link></div>
                <div className="menuItem"><Link to='/tic-tac-toe'>Tic Tac Toe</Link></div>
            </div>
        </nav>
    </header>
);

export default Header;