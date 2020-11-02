import React, {Component} from 'react';
import ListContainer from '../containers/ListContainer'
import ShowContainer from '../containers/ShowContainer'

class Physicians extends Component {
    state = {
        physicians: [],
        phyisicianId: null,
    }
    componentDidMount(){
        fetch('http://localhost:3000/physicians',
        {headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`}
        })
        .then(resp => resp.json())
        .then(data => {
            // debugger;
            this.setState({
                physicians: data.data.map(el => el.attributes)
            });
        })
    }

    displayPhysician = physicianId => {
        // debugger;
        this.setState({
            phyisicianId: physicianId
        })
    }
    render(){
        return(
            <div>
                <h1>Physicians</h1>
                <ListContainer cName="list-container" endpoint="physicians" handleClick={this.displayPhysician} payload={this.state.physicians}/>
                <ShowContainer cName="show-container" payload={this.state.physicians.filter(physician => physician.id === parseInt(this.state.phyisicianId))}/>
            </div>
        )
    }
}

export default Physicians;