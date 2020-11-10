import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import ShowContainer from '../containers/ShowContainer';

class Treatments extends Component {
    state = {
        treatments: [],
        treatmentId: null,
    }
    componentDidMount(){
        fetch('http://localhost:3000/treatments',
        {headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`}
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                treatments: data
            });
        })
    }

    displayTreatment = treatmentId => {
        this.setState({
            treatmentId: treatmentId
        })
    }
    render(){
        return(
            <div className='page-container'>
                <ListContainer cName="list-container" endpoint="treatments" handleClick={this.displayTreatment} payload={this.state.treatments}/>
                <ShowContainer cName="show-container" endpoint="treatments" payload={this.state.treatments.filter(treatment => treatment.id === parseInt(this.state.treatmentId))}/>
            </div>
        )
    }
}

export default Treatments;