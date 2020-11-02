import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';
import {autoLogin} from './Redux/actions'

import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    this.props.autoLogin();
  }
  render(){
    console.log("userReducer:", this.props.userReducer)
  
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/landing" component={Landing}/>
        </Switch>
      </div>
    );
  }
  
}

let msp = (state) => {
  return {
    userReducer: state.userReducer
  }
}

let mdp = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  };
};
export default connect(msp, mdp)(App);