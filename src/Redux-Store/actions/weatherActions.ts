const API_KEY = '6e2b9099562f5a55a540f32121233cc6';

export const asyncGetWeather = (lang = 'ru', city = 'Kyiv') =>  (dispatch:any) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=metric&APPID=${API_KEY}`)
        .then(
            resp => resp.json()
        )
        .then(
            data => {
                dispatch({ type: 'FETCH_WEATHER_DATA', payload: data })
            }
        );
};
