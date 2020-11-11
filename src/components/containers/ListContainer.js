import { Component } from "react";
import './ListContainer.css';

export default class ListContainer extends Component{
    handleClick = e => {
        this.props.handleClick(e.target.id);
    }
    
    renderList = () => {
        if(this.props.endpoint==="physicians")
            return this.props.payload.map( element => {
                return <li key={element.id} id={element.id} onClick={this.handleClick} className='button'>{element.specialization}</li>
            })
        else if(this.props.endpoint === "treatments")
            return this.props.payload.map(element => {
                return <li key={element.id} id={element.id} onClick={this.handleClick} className='button'>{element.treatment_name}</li>
            })
    }
    
    render(){
        return(
            <div className={this.props.cName}>
                <ul className={this.props.cName}>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}