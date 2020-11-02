import { Component } from "react";

export default class ListContainer extends Component{
    render(){
        return(
            <div>
                <ul className={this.props.cName}>
                    <li>physician1</li>
                    <li>physician2</li>
                    <li>physician3</li>
                    <li>physician4</li>
                    <li>physician5</li>
                </ul>
            </div>
        )
    }
}