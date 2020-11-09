import { combineReducers } from 'redux';
import lang from "./reducers/lang_reducer";
import weatherData from "./reducers/weather_Reducer";

export default combineReducers({
    lang,
    weatherData
})
