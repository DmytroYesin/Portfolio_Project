const initialState = {
    data: null,
    loading: false,
    error: false,
};

export default function weatherData(state = initialState, action:any) {
    switch (action.type) {
        case "SUCCESS_WEATHER_DATA":
            return {...state, data:  action.payload, loading: false, error: false};
        case "REQUEST_WEATHER_DATA":
            return {...state, loading: true, error: false};
        case "ERROR_FETCH_WEATHER_DATA":
            return {...state, loading: false, error: true};
        default:
            return state;
    }
};


