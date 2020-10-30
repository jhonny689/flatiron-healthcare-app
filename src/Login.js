import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {connect} from 'react-redux';
import {login, fetchUser} from './Redux/actions';
import thunk from 'redux-thunk';
import rootReducer from './Redux/reducer';

// let store = createStore(rootReducer, applyMiddleware(thunk))
class Login extends Component{
    state = {
        username: "",
        password: "",
    }

    handleInputChange = event =>{
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    login = event => {
        event.preventDefault();
        
        const {history} = this.props;

        this.props.fetchUser(this.state);
        history.push('/users');
    }

    render(){
        return(
            <form onSubmit={this.login}>
                <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInputChange} ></input>
                <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange} ></input>
                <input type='submit'></input>
                <input type='cancel'></input>
            </form>
        )
    }
}
function mdp(dispatch){
    return {fetchUser: (userInfo)=> dispatch(fetchUser(userInfo))}
}



export default connect(null, mdp)(Login)