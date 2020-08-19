import React from 'react';
import './TicTac.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GameField from "./gameField";

const initialState = {
    field: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ],
    symbol: 'o',
    winning: 'play',
    step_count: 0,
    autoplay: true,
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

    checkLine (coordinates: number[][], symbol: string, field: string[][] = this.state.field) {
        let count = 0;
        let empty: number[] = [];
        coordinates.forEach((item) => {
            if (field[item[0]][item[1]] === symbol) {
                count += 1;
            } else if (field[item[0]][item[1]] === '-') {
                empty = item;
            }
        });

        if (count === 2 && empty.length) {
            return empty;
        } else {
            return false;
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

    clone2DArray (data: any[][]) {
        return data.map((subArr) => subArr.map((val) => val));
    };

    randomStep (limit:number) {
        if (limit > 1) {
            return Math.floor(Math.random() * limit);
        } else {
            return 0;
        }
    }

    componentDidUpdate() {
        if (this.state.autoplay && this.state.winning === 'play' && this.state.symbol !==  this.state.first_player_symbol) {
            this.timeoutAutoplay();
        }
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

    doNextStep = (x:number, y:number) => {
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

    clicked = (x:number, y:number) => {
        if (this.state.field[y][x] === '-' && this.state.winning === 'play') {
            this.doNextStep(x,y);
        }
    };

    runAutoplay = () => {
        let possibleSteps: number[][] = [],
            emptyPoints = [],
            isDone = false,
            { field, symbol, first_player_symbol } = this.state,
            possibleLines = [
                [[0, 0], [0, 1], [0, 2]],
                [[1, 0], [1, 1], [1, 2]],
                [[2, 0], [2, 1], [2, 2]],
                [[0, 0], [1, 0], [2, 0]],
                [[0, 1], [1, 1], [2, 1]],
                [[0, 2], [1, 2], [2, 2]],
                [[0, 0], [1, 1], [2, 2]],
                [[2, 0], [1, 1], [0, 2]]
            ];

        if (field[1][1] !== '-') {
            for (let i = 0; i < possibleLines.length; i++) {
               let value = possibleLines[i];
               let resWin = this.checkLine(value, symbol);
               let resDanger = this.checkLine(value, first_player_symbol);

               if (resWin) {
                   this.doNextStep(resWin[1], resWin[0]);
                   isDone = true;
                   break
               } else if (resDanger) {
                   this.doNextStep(resDanger[1], resDanger[0]);
                   isDone = true;
                   break
               }
            }

            if (!isDone) {
                for (let i = 0; i < 3; i++) {
                    let row = [];
                    let col = [];
                    for (let k = 0; k < 3; k++) {
                        row.push([i, k]);
                        col.push([k, i]);

                        if (field[i][k] === '-') {
                            emptyPoints.push([i, k]);
                            let predictField = this.clone2DArray(field);
                            predictField[i][k] = symbol;
                            possibleLines.forEach((value) => {
                                if (this.checkLine(value, symbol, predictField) &&
                                    ((i === 0 && (k === 0 || k === 2)) || (i ===2 && (k === 0 || k === 2)))) {
                                    possibleSteps.push([i, k]);
                                }
                            })
                        }
                    }
                }

                if (possibleSteps.length) {
                    let randPos = this.randomStep(possibleSteps.length);
                    this.doNextStep(possibleSteps[randPos][1], possibleSteps[randPos][0]);
                } else if (!possibleSteps.length && !isDone) {
                    let randEmp = this.randomStep(emptyPoints.length);
                    this.doNextStep(emptyPoints[randEmp][1], emptyPoints[randEmp][0]);
                }
            }
        } else {
            this.doNextStep(1, 1);
        }
    };

    timeoutAutoplay = () => {
        setTimeout(this.runAutoplay, 250);
    };

    render() {
        return (
            <div key="main_TicTac">
                <h1>Tic Tac Toe</h1>

                <h2>{this.state.winning === 'win' ?
                    "Player '" + this.state.symbol + "' is win!"
                    : this.state.winning === 'draw' ? "It's a draw!" : "Let's play"}</h2>

                <GameField
                    field={this.state.field}
                    callback={this.clicked}
                />

                <div className="controlBlock">

                    <FormControlLabel
                        control={<Checkbox
                                    key="autoplay"
                                    checked={this.state.autoplay}
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