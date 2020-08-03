import React from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
import './../../App.css';
import Button from '@material-ui/core/Button';


// function TicTac() {
//     // function clicked() {
//     //     console.log("Clicked");
//     // }
//
//     return (
//         <div>
//             <h1>Tic Tac Toe</h1>
//             <Button onClick={() => console.log("click")} variant="outlined" color="primary">
//                 Click
//             </Button>
//         </div>
//     );
// }

class TicTac extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {date: new Date()};
    }

    clicked() {
        console.log("Clicked");
    }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <Button onClick={this.clicked} variant="outlined" color="primary">
                    Click
                </Button>
            </div>
        );
    }
}

export default TicTac;