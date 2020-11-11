import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Physicians from './components/pages/Physicians';
import Treatments from './components/pages/Treatments';
import Journal from './components/pages/Journal';
import { logUserOut } from './Redux/actions';

const Landing =(props) =>{
    let {url} = useRouteMatch();
    if(props.loggedIn)
        return(
            <div className="main-div">
                <div className='main-transparent'>
                <Navbar signoutHandler={e =>{sign_out(props)}}/>
                <Switch>
                    <Route path={`${url}/home`} component={Home}/>
                    <Route path={`${url}/profile`} component={Profile}/>
                    <Route path={`${url}/physicians`} component={Physicians}/>
                    <Route path={`${url}/treatments`} component={Treatments}/>
                    <Route path={`${url}/journal`} render={props => <Journal {...props}/>}/>
                </Switch>
                </div>
            </div>
        )
    else
        return <Redirect to="/login" />
}

const sign_out = (props) => {
    props.logUserOut();
}

function msp(state){
    console.log(state);
    return {loggedIn: state.userReducer.loggedIn}
}

function mdp(dispatch){
    return {logUserOut: ()=> dispatch(logUserOut())}
}

export default connect(msp, mdp)(Landing)