import React from 'react';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './../App.css';


const Header = () => (
    <header>
        <nav>
            <div className="nav_bar_ul">
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/tic-tac-toe'>Tic Tac Toe</Link></div>
            </div>
        </nav>
    </header>
);

export default Header;