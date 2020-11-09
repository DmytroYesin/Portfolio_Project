import React from 'react';
import './AtomsStyles.scss';

interface MyProps {
    city: string,
    temp: number,
    temp_feels: number,
    humidity: number,
    pressure: number,
    err: string,
}

const WeatherNowCard = (props:MyProps) => {

    return <div className="weather_now_card">
        <div className="city_Name">
            {
               props.err ?
                   props.err :
                   props.city
            }
        </div>
        <div className="main_data">
            <div className="data_block">
                <div className="data_block_main">{ props.err ? null : Math.round(props.temp) + ' °С' }</div>
                <div className="data_block_feels">{ props.err ? null : 'feels like: ' + Math.round(props.temp) + ' °С' }</div>
            </div>
            <div className="data_block">
                <div className="data_block_else">{ props.err ? null : 'Humidity: ' + props.humidity + '%' }</div>
                <div className="data_block_else">{ props.err ? null : 'Pressure: ' + props.pressure + ' mbar' }</div>
            </div>
        </div>
    </div>;
};

export default WeatherNowCard;