import { combineReducers } from 'redux';

let defaultState = {
    loggedIn: false,
    user:{}
}

function userReducer(state = defaultState, action){
    //return the value of the loggedInUser key in our state;
    switch(action.type){
        case "SET_USER":
            console.log("in reducer", action.payload);
            if(action.payload)
                return {
                    loggedIn: true,
                    user: {...action.payload},
                };
            else
                return state;
        case "LOG_OUT":
            localStorage.clear();
            return {
                loggedIn: false,
                user: {}
            };
        default:
            return state;
    }
}

let rootReducer = combineReducers({userReducer})

export default rootReducer