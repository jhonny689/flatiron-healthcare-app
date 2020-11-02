import { Component } from "react";

export default class ListContainer extends Component{
    handleClick = e => {
        // debugger;
        this.props.handleClick(e.target.id);
    }
    
    renderList = () => {
        return this.props.payload.map( element => {
            debugger;
            return <li key={element.id} id={element.id} onClick={this.handleClick}>{element.specialization}</li>
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