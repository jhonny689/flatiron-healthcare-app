export let login = (state) => {
    //1. wait
    console.log("state in functiom login:",state);
    return function(dispatch){
        console.log("state in inner function:",state);
        if(state.username === 'jhonny' && state.password === '123')
            dispatch({type: "LOG_IN", payload: "Jhonny"});
        else
            dispatch({type: "LOG_IN", payload: null});
    }
    //return { type: "LOG_IN" , payload: loggedInUser};
}

export const setUser = (payload) => ({type: "SET_USER", payload});
export const logUserOut = () => ({type: "LOG_OUT"});

export const fetchUser = (userInfo) => dispatch => {
    fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
            "content-type":"application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        dispatch(setUser(data.user));
    })
}

export const autoLogin = () => dispatch => {
    fetch('http://localhost:3000/auto_login', {
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        // debugger;
        localStorage.setItem("token", data.token);
        dispatch(setUser(data.user));
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch('http://localhost:3000/logins', {
        method: "POST",
        headers: {
            "content-type":"application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        dispatch(setUser(data.user));
    })
}