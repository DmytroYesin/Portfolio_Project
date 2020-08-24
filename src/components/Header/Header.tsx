import React from 'react';
import { NavLink  } from 'react-router-dom'
import './Header.scss';


const Header = () => (
    <header>
        <nav>
            <div className="nav_bar_ul">
                <div className="menuItem">
                    <NavLink exact activeClassName='Active_item' to='/'>
                        <img className="nav_bar_icon" src="/images/home.png" alt="home"/>
                        <div className="hided_text">Home</div>
                    </NavLink >
                </div>
                <div className="menuItem">
                    <NavLink activeClassName='Active_item' to='/about-me'>
                        <img className="nav_bar_icon" src="/images/info.png" alt="info"/>
                        <div className="hided_text">About Me</div>
                    </NavLink >
                </div>
                <div className="menuItem">
                    <NavLink activeClassName='Active_item' to='/tic-tac-toe'>
                        <img className="nav_bar_icon" src="/images/tic-tac-toe.png" alt="game"/>
                        <div className="hided_text">Tic Tac Toe</div>
                    </NavLink >
                </div>
            </div>
        </nav>
    </header>
);

export default Header;