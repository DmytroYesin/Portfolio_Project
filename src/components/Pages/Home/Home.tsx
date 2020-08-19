import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
// import { Link } from 'react-router-dom'
import './Home.css';


const Home = () => {
    const [clicker, updClicker] = useState(0);
    const [inputVal, updInput] = useState('');
    const width = useWindowsWidth();

    function handleInputChange(e:any) {
        updInput(e.target.value);
    }

    useEffect(() => {
       document.title =  inputVal;
    });

    return <>
        <div className="rootHome">
            <h1>Welcome to Dmytro Yesin's Website!</h1>
        </div>

        <h2>{clicker}</h2>

        <div className="btn_block">
            <Button  onClick={() => updClicker(clicker - 1)} variant="outlined" color="primary">
                Minus
            </Button>

            <Button  onClick={() => updClicker(clicker + 1)} variant="outlined" color="primary">
                Plus
            </Button>
        </div>

        <h2>{inputVal}</h2>

        <div className="btn_block">
            <Input color="primary" onChange={handleInputChange} />
        </div>

        <h2>{width}</h2>

    </>
};

function useWindowsWidth() {                                      // this is a custom hook
    const [width, updWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => updWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);  // The same as componentWillUnmount
        };
    });
    return width;
}

export default Home;