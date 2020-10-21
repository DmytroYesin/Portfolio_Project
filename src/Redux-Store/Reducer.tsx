const initialState = {
    lang: "en",
    weatherData: null,
};

export default function reducer(state = initialState, action:any) {
    switch (action.type) {
        case "CHANGE_LANG":
            return {...state, lang: action.payload};
        case "FETCH_WEATHER_DATA":
            return {...state, weatherData:  action.payload};
        default:
            return state;
    }
};


