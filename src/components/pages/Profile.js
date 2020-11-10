import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Profile.css';

class Profile extends Component {

    state = {
        userProfile: {
            id: "",
            f_name: "",
            l_name: "",
            dob: "",
            height: "",
            weight: "",
            email: "",
            phone_number: "",
        },
    }
    componentDidMount(){
        // debugger;
        const userId = this.props.userReducer.user.id;
        if(this.props.userReducer.user.isPhysician){
            fetch('http://localhost:3000/physicians/'+userId,
            {headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`}
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    userProfile: data.data.attributes
                })
            })
        }else{
            fetch('http://localhost:3000/patients/'+userId,
            {headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`}
            })
            .then(resp => resp.json())
            .then(data => {
                // debugger;
                this.setState({
                    userProfile: data.data.attributes
                })
            })
        }
    }
    
    makeProfileEditable = e => {
        const headers = document.getElementsByClassName('editable-el');
        for(let el of headers){
            el.readOnly=false;
            el.classList.add('editable');
        }
    }

    handleInputChange = e => {
        debugger;
        this.setState({
            userProfile: {...this.state.userProfile, [e.target.name]: e.target.value}
        });
    }

    update = e => {
        //todo: fetch request Patching the update in API
        fetch('http://localhost:3000/patients/'+this.state.userProfile.id,{
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(this.state.userProfile)
        })

        const headers = document.getElementsByClassName('editable-el');
        for(let el of headers){
            el.readOnly=true;
            el.classList.remove('editable');
        }
    }

    render(){
        return(
            <div className='profile_container'>
                <div className='labels_list'>
                    <h3>First Name</h3>
                    <h3>Last Name</h3>
                    <h3>Date of Birth</h3>
                    <h3>Height [ft]</h3>
                    <h3>Weight [lbp]</h3>
                    <h3>Email</h3>
                    <h3>Phone number</h3>
                </div>
                <div className='values_list'>
                    <input type='text' className='editable-el' onChange={this.handleInputChange} name='f_name' value={this.state.userProfile.f_name} readOnly={true}/>
                    <input type='text' className='editable-el' onChange={this.handleInputChange} name='l_name' value={this.state.userProfile.l_name} readOnly={true}></input>
                    <input type='date' className='editable-el' onChange={this.handleInputChange} name='dob' value={this.state.userProfile.dob ? this.state.userProfile.dob : " "} readOnly={true}></input>
                    <input type='number' className='editable-el' step='.1' onChange={this.handleInputChange} name='height' value={this.state.userProfile.height} readOnly={true}></input>
                    <input type='number' className='editable-el' step='.1' onChange={this.handleInputChange} name='weight' value={this.state.userProfile.weight} readOnly={true}></input>
                    <input type='email' className='editable-el' onChange={this.handleInputChange} name='email' value={this.state.userProfile.email} readOnly={true}></input>
                    <input type='tel' className='editable-el' onChange={this.handleInputChange} name='phone_number' value={this.state.userProfile.phone_number} readOnly={true}></input>
                </div>
                <i className="fas fa-user-edit" onClick={this.makeProfileEditable}></i>
                <i className="fas fa-save" onClick={this.update}></i>
            </div>
        )
    }
}
const msp = state => {
    return {
        userReducer: state.userReducer
    }
}
export default connect(msp)(Profile);