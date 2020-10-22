import React, {useEffect, useState} from 'react';
import './weather.scss';
import Button from "@material-ui/core/Button";
// import Input from "@material-ui/core/Input/Input";
import { connect } from 'react-redux';

import { asyncGetWeather } from "../../../Redux-Store/actions/weatherActions";
import Input from "@material-ui/core/Input/Input";

const Weather = (props:any) => {

    const [city, updInput] = useState('Kyiv');
    let [iconName, updIconName] = useState (null);

    function handleInputChange(e:any) {
        updInput(e.target.value);
    }

    useEffect(() => {
        if (!props.globalStore.weatherData) {
            props.onGetWeather(props.globalStore.lang);
        }
    });

    useEffect(() => {
        if (props.globalStore.weatherData && props.globalStore.weatherData.list) {
            updIconName(props.globalStore.weatherData.list[0].weather[0].icon);
        }
    }, [props.globalStore.weatherData]);

    return <>
        <div className="rootHome">
            <h1>{ props.globalStore.weatherData && (props.globalStore.weatherData.city ? props.globalStore.weatherData.city.name : props.globalStore.weatherData.message) }</h1>
            <h3>{ props.globalStore.weatherData && (props.globalStore.weatherData.city ? 'Temperature: ' + props.globalStore.weatherData.list[0].main.temp : null) }</h3>
        </div>

        <div className="btn_block">
            <img src={ iconName ? `http://openweathermap.org/img/wn/${iconName}@4x.png` : '' } alt="no icon" />
        </div>

        <div className="btn_block">
            <Button  onClick={() => props.onChangeLeng('en')}
                     variant={props.globalStore.lang === 'en' ? "contained" : "outlined"}
                     color="primary">
                EN
            </Button>

            <Button  onClick={() => props.onChangeLeng('ru')}
                     variant={props.globalStore.lang === 'ru' ? "contained" : "outlined"}
                     color="primary">
                RU
            </Button>
        </div>

        <div className="btn_block">
            <Input color="primary" onChange={handleInputChange} />
        </div>

        <div className="btn_block">
            <Button  onClick={() => props.onGetWeather(props.globalStore.lang, city)}
                     variant="contained"
                     color="primary"
                     className="fullWidth">
                Get Weather data
            </Button>
        </div>
    </>
};

export default connect(
    state => ({
        globalStore: state
    }),
    dispatch => ({
        onChangeLeng: (leng:any) => {
            dispatch({ type: 'CHANGE_LANG', payload: leng })
        },
        onGetWeather: (lang:string, city:string) => {
            // @ts-ignore
            dispatch(asyncGetWeather(lang, city));
        }
    })
)(Weather);
