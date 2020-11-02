import React, {Component} from 'react';
import ListContainer from '../containers/ListContainer'
import ShowContainer from '../containers/ShowContainer'

class Physicians extends Component {
    
    render(){
        return(
            <div>
                <h1>Physicians</h1>
                <ListContainer cName="list-container" endpoint="physicians"/>
                <ShowContainer cName="show-container" />
            </div>
        )
    }
}

export default Physicians;