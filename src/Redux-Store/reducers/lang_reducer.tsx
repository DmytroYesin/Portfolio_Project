const initialState = "en";

export default function lang(state = initialState, action:any) {
    switch (action.type) {
        case "CHANGE_LANG":
            return action.payload;
        default:
            return state;
    }
};


