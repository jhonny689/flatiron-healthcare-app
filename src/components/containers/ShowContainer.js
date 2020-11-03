import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./ShowContainer.css";

export default class ShowContainer extends Component{
    renderPhysicianDisplayCard = toDis => {
        return(
            <div className={this.props.cName}>
                <table>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        )
    }

    renderTreatmentDisplayCard = toDis => {
        return (
            <div className={this.props.cName}>
                <table>
                    <tbody>
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
                    </tbody>
                </table>
                <Link to={{
                    pathname: '/landing/journal',
                    state: {treatment: toDis}
                    }} >
                    <h3>Log Journal</h3>
                </Link>
            </div>
        )
    }

    render(){
        let toDis = this.props.payload[0];
        if(!!toDis){
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