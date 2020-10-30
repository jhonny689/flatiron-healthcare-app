import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Landing extends Component{
    debugger;
    render(){
        if(this.props.loggedIn)
            return(
                <div>
                    <h1>You Landed in Landing!!! </h1>
                    {/* <Navbar /> */}
                </div>
            )
        else
            return <Redirect to="/login" />
    }
}
function msp(state){
    console.log(state);
    return {loggedIn: state.userReducer.loggedIn}
}

export default connect(msp)(Landing)