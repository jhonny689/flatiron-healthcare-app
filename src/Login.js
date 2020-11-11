import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './Redux/actions';
import { Redirect } from 'react-router-dom';
import './Login.scss';

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
        // const {history} = this.props;
        this.props.fetchUser(this.state);
    }

    render(){
        if(this.props.loggedIn){
            return <Redirect to="/landing/home"/>
        }
        return(
            <div className='login-Div'>
                <div className='transparent'>
                    <h1 className="login-logo">Flatiron <i className="fas fa-notes-medical"></i> Healthcare</h1>
                    <form className='login' onSubmit={this.login}>
                        <label className='form_title'>Welcome, kindly sign in:</label><br/>
                        <input className='login_input' type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInputChange} ></input><br/>
                        <input className='login_input' type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange} ></input><br/>
                        <input className='submit_input login_btn' type='submit'></input>
                        <input className='reset_input login_btn' type='reset'></input>
                    </form>
                </div>
            </div>
        )
    }
}
function msp(state){
    console.log(state);
    return {loggedIn: state.userReducer.loggedIn}
}

function mdp(dispatch){
    return {fetchUser: (userInfo)=> dispatch(fetchUser(userInfo))}
}



export default connect(msp, mdp)(Login)