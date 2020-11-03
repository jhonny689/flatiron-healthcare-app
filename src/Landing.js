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

const Landing =(props) =>{
    let {url} = useRouteMatch();
    if(props.loggedIn)
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route path={`${url}/home`} component={Home}/>
                    <Route path={`${url}/profile`} component={Profile}/>
                    <Route path={`${url}/physicians`} component={Physicians}/>
                    <Route path={`${url}/treatments`} component={Treatments}/>
                    <Route path={`${url}/journal`} render={props => <Journal {...props}/>}/>
                </Switch>
            </div>
        )
    else
        return <Redirect to="/login" />
}
function msp(state){
    console.log(state);
    return {loggedIn: state.userReducer.loggedIn}
}

export default connect(msp)(Landing)