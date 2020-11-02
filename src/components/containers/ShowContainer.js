import { Component } from "react";
import "./ShowContainer.css";

export default class ShowContainer extends Component{
    renderPhysicianDisplayCard = toDis => {
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
    }

    renderTreatmentDisplayCard = toDis => {
        return (
            <div className={this.props.cName}>
                <table>
                    <tr>
                        <td className="label">Name</td>
                        <td>:</td>
                        <td>{toDis.treatment_name}</td>
                    </tr>
                    <tr>
                        <td className="label">Description</td>
                        <td>:</td>
                        <td>{toDis.description}</td>
                    </tr>
                    <tr>
                        <td className="label">Days</td>
                        <td>:</td>
                        <td>{toDis.days}</td>
                    </tr>
                    <tr>
                        <td className="label">Physician</td>
                        <td>:</td>
                        <td>{toDis.physician_id}</td>
                    </tr>
                </table>
            </div>
        )
    }

    render(){
        debugger
        let toDis = this.props.payload[0];
        if(!!toDis){
            // debugger;
            switch (this.props.endpoint){
                case "physicians":
                    return this.renderPhysicianDisplayCard(toDis);
                case "treatments":
                    return this.renderTreatmentDisplayCard(toDis);
                default:
                    return <h2>There was an error in rendering the right type of info, kindly check the endpoint type passed to ShowContainer</h2>;
            }
                
        }else
            return(
            <h2>this is where we will render the {this.props.endpoint} info</h2>
            )
    }
}