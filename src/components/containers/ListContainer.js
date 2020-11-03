import { Component } from "react";

export default class ListContainer extends Component{
    handleClick = e => {
        this.props.handleClick(e.target.id);
    }
    
    renderList = () => {
        if(this.props.endpoint==="physicians")
            return this.props.payload.map( element => {
                return <li key={element.id} id={element.id} onClick={this.handleClick}>{element.specialization}</li>
            })
        else if(this.props.endpoint === "treatments")
            return this.props.payload.map(element => {
                return <li key={element.id} id={element.id} onClick={this.handleClick}>{element.treatment_name}</li>
            })
    }
    
    render(){
        return(
            <div>
                <ul className={this.props.cName}>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}