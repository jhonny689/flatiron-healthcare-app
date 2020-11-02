import { Component } from "react";

export default class ListContainer extends Component{
    handleClick = e => {
        // debugger;
        this.props.handleClick(e.target.id);
    }
    
    renderList = () => {
        if(this.props.endpoint==="physicians")
            return this.props.payload.map( element => {
                debugger;
                return <li key={element.id} id={element.id} onClick={this.handleClick}>{element.specialization}</li>
            })
        else if(this.props.endpoint === "treatments")
            return this.props.payload.map(element => {
                debugger;
                return <li key={element.id} id={element.id} onClick={this.handleClick}>{element.treatment_name}</li>
                // created_at: "2020-10-30T20:46:50.594Z"
                // days: 10
                // description: "This treatment help diabetes patients to live a normal life"
                // id: 3
                // physician_id: 3
                // treatment_name: "Diabetes no more"
                // updated_at: "2020-10-30T20:46:50.594Z"
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