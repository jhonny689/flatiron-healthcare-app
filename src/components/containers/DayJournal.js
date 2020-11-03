const { Component } = require("react");

class DayJournal extends Component {

    state = {
        day_num: 0,
        body_temp: 0,
        pulse_rate: 0,
        resp_rate: 0,
        blood_pressure: 0,
        blood_sugar: 0,
        pain: 0
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSaveDailyJournal = e => {
        e.preventDefault();
        window.alert("Saved");
    }
    render(){
        if(!!this.props.targetDay){
            return(
                <div>
                    <h1>This is where will will render the journal vitals for day #{this.props.targetDay}</h1>
                    <form onSubmit={this.handleSaveDailyJournal}>
                        <label>Day Num:</label>
                        <input type="number" name="day_num" value={this.props.targetDay} disabled={true}></input><br/>
                        <label>Body temperature:</label>
                        <input type="number" step="0.1" name="body_temp" value={this.state.body_temp} onChange={this.handleChange}></input><br/>
                        <label>Pulse rate:</label>
                        <input type="number" step="0.1" name="pulse_rate" value={this.state.pulse_rate} onChange={this.handleChange}></input><br/>
                        <label>Respiratory rate:</label>
                        <input type="number" step="0.1" name="resp_rate" value={this.state.resp_rate} onChange={this.handleChange}></input><br/>
                        <label>Blood pressure:</label>
                        <input type="number" step="0.1" name="blood_pressure" value={this.state.blood_pressure} onChange={this.handleChange}></input><br/>
                        <label>Blood sugar:</label>
                        <input type="number" step="0.1" name="blood_sugar" value={this.state.blood_sugar} onChange={this.handleChange}></input><br/>
                        <label>Pain:</label>
                        <input type="number" step="0.1" name="pain" value={this.state.pain} onChange={this.handleChange}></input><br/>
                        <input type="submit" value="Save"/>
                        <input type="reset" value="Cancel"/>
                    </form>
                </div>
            )
        }else{
            return null
        }
    }
}

export default DayJournal;