import { Component } from 'react';
import './DayJournal.css';


class DayJournal extends Component {

    state = {
        entered: false,
        day_num: 0,
        body_temp: 0,
        pulse_rate: 0,
        resp_rate: 0,
        blood_pressure_low: 0,
        blood_pressure_high: 0,
        blood_sugar: 0,
        pain: 0
    }

    componentDidUpdate(prevProps){
        if(prevProps.targetDay !== this.props.targetDay){

            // debugger;
            if(this.props.entered.length>0)
            {
                const {id, patient_treatment_id, updated_at, created_at, ...enteredDay} = this.props.entered[0];
                this.setState({entered: true, ...enteredDay});
            }else{
                this.resetForm();
            }
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSaveDailyJournal = e => {
        e.preventDefault();
        window.alert("Saved");
        console.log({...this.state, day_num: this.props.targetDay});
        this.props.saveDailyJournal({...this.state, day_num: this.props.targetDay});
    }
    resetForm = () => {
        this.setState({
                entered: false,
                day_num: 0,
                body_temp: 0,
                pulse_rate: 0,
                resp_rate: 0,
                blood_pressure_low: 0,
                blood_pressure_high: 0,
                blood_sugar: 0,
                pain: 0
            })
    }
    render(){
        // debugger;
        if(!!this.props.targetDay){
            return(
                <div className={this.props.cName}>
                    {/* <h1>This is where will will render the journal vitals for day #{this.props.targetDay}</h1> */}
                    <form onSubmit={this.handleSaveDailyJournal}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Day Num:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" name="day_num" value={this.props.targetDay} disabled={true}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Body temperature:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" step="0.1" name="body_temp" value={this.state.body_temp} onChange={this.handleChange} readOnly={this.state.entered}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Pulse rate:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" step="0.1" name="pulse_rate" value={this.state.pulse_rate} onChange={this.handleChange} readOnly={this.state.entered}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='col1'>Respiratory rate:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" step="0.1" name="resp_rate" value={this.state.resp_rate} onChange={this.handleChange} readOnly={this.state.entered}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='col1'>Blood pressure low:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" step="0.1" name="blood_pressure_low" value={this.state.blood_pressure_low} onChange={this.handleChange} readOnly={this.state.entered}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='col1'>Blood pressure high:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" step="0.1" name="blood_pressure_high" value={this.state.blood_pressure_high} onChange={this.handleChange} readOnly={this.state.entered}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='col1'>Blood sugar:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" step="0.1" name="blood_sugar" value={this.state.blood_sugar} onChange={this.handleChange} readOnly={this.state.entered}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='col1'>Pain:</label>
                                    </td>
                                    <td>
                                        <input className={this.state.entered?'editable-el':'editable editable-el'} type="number" step="0.1" name="pain" value={this.state.pain} onChange={this.handleChange} readOnly={this.state.entered}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <input className='button' type="submit" value="Save" disabled={this.state.entered}/>
                                        <input className='button' type="reset" value="Cancel" onClick={this.resetForm}  disabled={this.state.entered}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            )
        }else{
            return(
                <div className='show-container'>

                </div>
            )
        }
    }
}

export default DayJournal;