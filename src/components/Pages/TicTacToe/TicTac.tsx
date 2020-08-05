import React from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
import './TicTac.css';
import Button from '@material-ui/core/Button';

const initialState = {
    field: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ],
    symbol: 'o',
    winning: 'play',
    step_count: 0,
};

interface MyState {
    field: string[][],
    symbol: string,
    winning: string,
    step_count: number,
}

class TicTac extends React.Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = initialState;
    }

    printRow(props: string[], y:number) {
        return  <React.Fragment key={"sub_row_comp_" + y}>
                {
                    props.map((value: string, x) => {
                        return <React.Fragment key={"sqr_" + y + x}>
                                    <div onClick={() => this.clicked(x, y)} >
                                        <div className={value==='-' ? 'empty_symbol_class' : value==='o' ? 'o_symbol_class' : 'x_symbol_class'}> </div>
                                    </div>
                        </React.Fragment>
                    })
                }
        </React.Fragment>;
    }

    print_field(props: string[][]) {
        return  <>
            <div key="Main_field" className="main_field">
                {
                    props.map((subArr: string[], y) => {
                        return <React.Fragment key={"row_" + y}>
                                    <div className="field_row">
                                        {this.printRow(subArr, y)}
                                    </div>
                        </React.Fragment>;
                    })
                }
            </div>
        </>;
    }

    moveOn(x:number, y:number) {
        this.setState((state) => {
            let newArr = state.field;
            newArr[y][x] = state.symbol;
            let isWin = this.CheckWin(newArr,  state.symbol);

            console.log(isWin, state.winning);

            if (!isWin && state.winning === 'play' && state.step_count < 8) {
                return {...state, field: newArr, symbol: state.symbol === 'o' ? 'x' : 'o', step_count: state.step_count + 1};
            } else if (isWin && state.winning === 'play') {
                return {...state, field: newArr, winning: 'win'};
            } else if (!isWin && state.winning === 'play' && state.step_count === 8) {
                return {...state, field: newArr, winning: 'draw'};
            }
        });
    }

    clicked(x:number, y:number) {
        if (this.state.field[y][x] === '-' && this.state.winning === 'play') {
            this.moveOn(x,y);
        }
    }

    CheckWin(field: string[][], symbol: string) {
        if (field[0][0] === symbol && field[1][1] === symbol && field[2][2] === symbol) {
            return true;
        } else if (field[0][2] === symbol && field[1][1] === symbol && field[2][0] === symbol) {
            return true;
        }

        for (let i = 0; i < 3; i++) {
            if (field[i][0] === symbol && field[i][1] === symbol && field[i][2] === symbol) {
                return true;
            } else if (field[0][i] === symbol && field[1][i] === symbol && field[2][i] === symbol) {
                return true;
            }
        }

        return false;
    }


    render() {
        return (
            <div key="main_TicTac">
                <h1>Tic Tac Toe</h1>

                <h2>{this.state.winning === 'win' ?
                    "Player '" + this.state.symbol + "' is win!"
                    : this.state.winning === 'draw' ? "It's a draw!" : "Let's play"}</h2>

                <div className="game_block" >
                    {this.print_field(this.state.field)}
                </div>

                <Button  onClick={() => this.clicked(2,0)} variant="outlined" color="primary">
                    {this.state.winning ? "Win" : "Game on"}
                </Button>
            </div>
        );
    }
}

export default TicTac;