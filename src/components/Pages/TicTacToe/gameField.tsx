import React from 'react';
import './TicTac.scss';


function GameField(props:any) {

    function printRow (data: string[], y:number) {
        return  <React.Fragment key={"sub_row_comp_" + y}>
                {
                    data.map((value: string, x) => {
                        return <React.Fragment key={"sqr_" + y + x}>
                                    <div onClick={() => props.callback(x, y)} >
                                        <div className={value==='-' ? 'empty_symbol_class' :
                                                        value==='o' ? 'o_symbol_class' :
                                                            'x_symbol_class'}
                                        >
                                        </div>
                                    </div>
                        </React.Fragment>
                    })
                }
        </React.Fragment>;
    }

    function print_field (data: string[][]) {
        return  <>
            <div key="Main_field" className="main_field">
                {
                    data.map((subArr: string[], y) => {
                        return <React.Fragment key={"row_" + y}>
                                    <div className="field_row">
                                        {printRow(subArr, y)}
                                    </div>
                        </React.Fragment>;
                    })
                }
            </div>
        </>;
    }

    return (
            <div className="game_block" >
                {print_field(props.field)}
            </div>
    );
}

export default GameField;