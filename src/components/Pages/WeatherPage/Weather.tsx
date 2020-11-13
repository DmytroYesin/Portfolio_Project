import React, {useEffect, useState} from 'react';
import './weather.scss';
import Button from "@material-ui/core/Button";
// import Input from "@material-ui/core/Input/Input";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import WeatherNowCard from "../../Atoms/WeatherNowAtom";

import { fetchWeather } from "../../../Redux-Store/actions/weatherActions";
import Input from "@material-ui/core/Input/Input";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Weather = (props:any) => {

    const [city, updInput] = useState('Kyiv');
    let [iconName, updIconName] = useState (null);

    const notify = () => toast("Start Updating");

    function handleInputChange(e:any) {
        updInput(e.target.value);
    }

    useEffect(() => {
        if (!props.globalStore.weatherData.data && !props.globalStore.weatherData.loading) {
            props.onGetWeather(props.globalStore.lang, city);
        }
    });

    useEffect(() => {
        if (props.globalStore.weatherData.data && props.globalStore.weatherData.data.list) {
            updIconName(props.globalStore.weatherData.data.list[0].weather[0].icon);
        }
    }, [props.globalStore.weatherData.data]);

    return <>
        <div className="btn_block">
                {
                    props.globalStore.weatherData.loading ?
                        <Loader
                            type="TailSpin"
                            color="#00BFFF"

                        /> : props.globalStore.weatherData.data && <WeatherNowCard
                                city={props.globalStore.weatherData.data.city.name}
                                temp={props.globalStore.weatherData.data.list[0].main.temp}
                                temp_feels={props.globalStore.weatherData.data.list[0].main.feels_like}
                                pressure={props.globalStore.weatherData.data.list[0].main.pressure}
                                humidity={props.globalStore.weatherData.data.list[0].main.humidity}
                                err={props.globalStore.weatherData.data.message}
                        />
                }
        </div>

        <div className="btn_block">
            {
                props.globalStore.weatherData.loading ?
                    <div className="loader_wrapper"><Loader
                        type="TailSpin"
                        color="#00BFFF"

                    /></div> : <img src={ iconName ? `http://openweathermap.org/img/wn/${iconName}@4x.png` : '' } alt="no icon" /> }
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
            <Button  onClick={() => {
                notify();
                return props.onGetWeather(props.globalStore.lang, city)
            }}
                     variant="contained"
                     color="primary"
                     className="fullWidth">
                Get Weather data
            </Button>
            <ToastContainer />
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
            dispatch(fetchWeather(lang, city));
        }
    })
)(Weather);
