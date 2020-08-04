import React from 'react';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
import './../../App.css';
import Button from '@material-ui/core/Button';



interface MyState {
    field: string[][],
    symbol: string,
}

class TicTac extends React.Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            field: [
                ['o', '-', 'x'],
                ['-', 'x', '-'],
                ['-', 'o', 'x']
            ],
            symbol: 'o',

        };
    }

    printRow(props: string[], y:number) {
        return  <>
            <div className="field_row">
                {
                    props.map((value: string, x) => {
                        //console.log(x, y);
                        let key = x.toString() + y.toString();

                        return (<div key={key} onClick={() => this.clicked(x, y)} >
                            <div className={value==='-' ? 'empty_symbol_class' : value==='o' ? 'o_symbol_class' : 'x_symbol_class'}> </div>

                        </div>)
                    })
                }
            </div>
        </>;
    }

    print_field(props: string[][]) {
        return  <>
            <div className="main_field">
                {
                    props.map((subArr: string[], y) => {
                        return this.printRow(subArr, y);
                    })
                }
            </div>
        </>;
    }

    moveOn(x:number, y:number) {
        this.setState((state) => {
            let newArr = state.field;
            newArr[y][x] = state.symbol;
            return {field: newArr, symbol: state.symbol === 'o' ? 'x' : 'o'};
        });
    }

    clicked(x:number, y:number) {
        console.log(x,y);
        console.log(this.state.field[x][y]);
        if (this.state.field[x][y] === '-') {
            this.moveOn(x,y);
        }
    }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>

                <Button  onClick={() => this.clicked(2,0)} variant="outlined" color="primary">
                    Click
                </Button>

                <div className="game_block" >
                    {this.print_field(this.state.field)}
                </div>
            </div>
        );
    }
}

export default TicTac;