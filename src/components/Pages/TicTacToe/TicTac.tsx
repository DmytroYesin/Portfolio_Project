import React from 'react';
import './TicTac.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const initialState = {
    field: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ],
    symbol: 'o',
    winning: 'play',
    step_count: 0,
    autoplay: false,
    first_player_symbol: 'o',
};

interface MyState {
    field: string[][],
    symbol: string,
    winning: string,
    step_count: number,
    autoplay: boolean,
    first_player_symbol: string,
}

class TicTac extends React.Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = initialState;
    }

    printRow (props: string[], y:number) {
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

    print_field (props: string[][]) {
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

    moveOn = (x:number, y:number) => {
        this.setState((state) => {
            let newArr = state.field;
            newArr[y][x] = state.symbol;
            let isWin = this.CheckWin(newArr,  state.symbol);

            if (!isWin && state.winning === 'play' && state.step_count < 8) {
                return {...state, field: newArr, symbol: state.symbol === 'o' ? 'x' : 'o', step_count: state.step_count + 1};
            } else if (isWin && state.winning === 'play') {
                return {...state, field: newArr, winning: 'win'};
            } else if (!isWin && state.winning === 'play' && state.step_count === 8) {
                return {...state, field: newArr, winning: 'draw'};
            }
        });
    };

    clicked (x:number, y:number) {
        if (this.state.field[y][x] === '-' && this.state.winning === 'play') {
            this.moveOn(x,y);
        }
    }

    CheckWin (field: string[][], symbol: string) {
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

    clearField (arr: string[][]) {
        return arr.map((item: string[]) => {
            return item.map((elem: string) => {
               return '-';
            })
        })
    }

    restartGame = () => {
        this.setState((state) => {
            return {...state, winning: 'play', field: this.clearField(state.field), step_count: 0, symbol: state.first_player_symbol};
        });
    };

    changeControl = () => {
        this.setState((state) => {
            return {...state, autoplay: !state.autoplay};
        });
    };

    checkLine (coordinates: number[][]) {
        let count = 0;
        let empty: number[] = [];
        coordinates.forEach((item) => {
            if (this.state.field[item[0]][item[1]] === this.state.first_player_symbol) {
                count += 1;
            } else if (this.state.field[item[0]][item[1]] === '-') {
                empty = item;
            }
        });

        if (count === 2 && empty.length) {
            return empty;
        } else {
            return false;
        }
    }

    runAutoplay () {
        let dangerPoint = [];
        if (this.state.field[1][1] === '-') {
            this.moveOn(1,1);
        } else {
            for (let i=0; i<3; i++) {
                let row = [];
                let col = [];
                for (let k=0; k<3; k++) {
                    row.push([i,k]);
                    col.push([k,i]);


                }

                let rowCheck = this.checkLine(row);
                let colCheck = this.checkLine(col);
                if (rowCheck) dangerPoint.push(rowCheck);
                if (colCheck) dangerPoint.push(colCheck);
            }
            let diag1 = this.checkLine([[0, 0], [1, 1], [2, 2]]);
            let diag2 = this.checkLine([[2, 0], [1, 1], [0, 2]]);
            if (diag1) dangerPoint.push(diag1);
            if (diag2) dangerPoint.push(diag2);

            if (dangerPoint.length) {
                this.moveOn(dangerPoint[0][1], dangerPoint[0][0]);
            }


        }
    }

    componentDidUpdate() {
        console.log('Updated')
        setTimeout(() => {
            console.log(this.state.autoplay, this.state.winning, this.state.symbol, this.state.first_player_symbol);
            if (this.state.autoplay && this.state.winning === 'play' && this.state.symbol !==  this.state.first_player_symbol) {
                console.log('In condition');
                this.runAutoplay();
            }
        }, 100)
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

                <div className="controlBlock">

                    <FormControlLabel
                        control={<Checkbox key="autoplay"
                                    value={this.state.autoplay}
                                    onChange={this.changeControl}
                                    disabled={this.state.step_count > 0}
                             />}
                        label="Autoplay"
                    />

                    <Button  onClick={() => this.restartGame()} variant="outlined" color="primary">
                        Restart Game
                    </Button>
                </div>
            </div>
        );
    }
}

export default TicTac;