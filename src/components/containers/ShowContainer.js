import { Component } from "react";
import "./ShowContainer.css";

export default class ShowContainer extends Component{
    render(){
        let toDis = this.props.payload[0];
        if(!!toDis){
            // debugger;
            return(
                <div className={this.props.cName}>
                    <table>
                        <tr>
                            <td className="label">Name</td>
                            <td>:</td>
                            <td>{toDis.full_name}</td>
                        </tr>
                        <tr>
                            <td className="label">Specialization</td>
                            <td>:</td>
                            <td>{toDis.specialization}</td>
                        </tr>
                        <tr>
                            <td className="label">School</td>
                            <td>:</td>
                            <td>{toDis.school}</td>
                        </tr>
                        <tr>
                            <td className="label">Graduation Year</td>
                            <td>:</td>
                            <td>{toDis.year}</td>
                        </tr>
                    </table>
                </div>
            )
        }else
            return(
                <h2>this is where we will render the physician info</h2>
            )
    }
}