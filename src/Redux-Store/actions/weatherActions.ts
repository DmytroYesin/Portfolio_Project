import { put, call, takeLeading } from 'redux-saga/effects'

const API_KEY = '6e2b9099562f5a55a540f32121233cc6';

const requestWeather = () => {
    return { type: 'REQUEST_WEATHER_DATA' }
};

const requestWeatherSuccess = (data:any) => {
    return { type: 'SUCCESS_WEATHER_DATA', payload: data }
};

const requestWeatherError = () => {
    return { type: 'ERROR_FETCH_WEATHER_DATA' }
};

const ExtraData = {
    lang: '',
    city: '',
};

export const fetchWeather = (lang = 'ru', city = 'Kyiv') => {
    ExtraData.lang = lang;
    ExtraData.city = city;
    return { type: 'FETCHED_WEATHER' }
};

// Sagas
export function* watchFetchWeather() {
    yield takeLeading('FETCHED_WEATHER', fetchWeatherAsync);
}

function* fetchWeatherAsync() {
    try {
        yield put(requestWeather());
        const data = yield call(() => {
                return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ExtraData.city}&lang=${ExtraData.lang}&units=metric&APPID=${API_KEY}`)
                    .then(res => res.json())
            }
        );
        yield put(requestWeatherSuccess(data));
    } catch (error) {
        yield put(requestWeatherError());
    }
}

// const asyncGetWeather = (lang = 'ru', city = 'Kyiv') =>  (dispatch:any) => {
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=metric&APPID=${API_KEY}`)
//         .then(
//             resp => resp.json()
//         )
//         .then(
//             data => {
//                 dispatch({ type: 'FETCH_WEATHER_DATA', payload: data })
//             }
//         );
// };
