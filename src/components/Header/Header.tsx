import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';


const Header = () => (
    <header>
        <nav>
            <div className="nav_bar_ul">
                <div className="menuItem">
                    <Link to='/'>
                        <img className="nav_bar_icon" src="/images/home.png" alt="home"/>
                        <div className="hided_text">Home</div>
                    </Link>
                </div>
                <div className="menuItem">
                    <Link to='/about-me'>
                        <img className="nav_bar_icon" src="/images/info.png" alt="info"/>
                        <div className="hided_text">About Me</div>
                    </Link>
                </div>
                <div className="menuItem">
                    <Link to='/tic-tac-toe'>
                        <img className="nav_bar_icon" src="/images/tic-tac-toe.png" alt="game"/>
                        <div className="hided_text">Tic Tac Toe</div>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;