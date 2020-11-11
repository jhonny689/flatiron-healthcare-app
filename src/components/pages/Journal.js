import DayJournal from '../containers/DayJournal';
import {Component} from 'react';
import './Journal.css';

class Journal extends Component{
    state = {
        targetDay: null,
        currentDay: null,
        previousDays: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/journals?treatmentId='+this.props.location.state.treatment.id,{
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(resp => resp.json())
        .then(res => {
            this.setState({
                currentDay: res.length + 1,
                previousDays: res
            })
        })
    }

    renderDaysButtons = () => {
        const days = this.props.location.state.treatment.days;
        let count = days;
        let buttons = [];
        while (count > 0){
            let id = days-(count-1);
            if(id< this.state.currentDay){
                buttons.push(<li className="button" key={id} id={id} onClick={this.loadDayJournal}>{"Day "+id} <i className="fas fa-check"></i></li>);
            }else{
                buttons.push(<li className="button" key={id} id={id} onClick={this.loadDayJournal}>{"Day "+id}</li>)
            }
            count--;
        }
        return buttons;
    }

    loadDayJournal = e => {
        this.setState({targetDay: e.target.id});
        // debugger;
    }

    saveDailyJournal = vitals => {

        let journal = {...vitals, treatment_id: this.props.location.state.treatment.id}
        console.log("vitals", vitals);
        console.log("journal",journal);
        fetch('http://localhost:3000/journals',{
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(journal)
        })
        .then(resp => resp.json())
        .then(data => {
            //debugger;
        })
    }

    returnEnteredData = () => {
        return this.state.previousDays.filter(day => {
            // debugger;
            return day.day_num === parseInt(this.state.targetDay);
        })
    }
    
    render(){
        return(
            <div className='page-container'>
                <div className="list-container">
                    <ul className='list-container'>
                        {this.renderDaysButtons()}
                    </ul>
                </div>
                <DayJournal cName="show-container" entered={this.returnEnteredData()} targetDay={this.state.targetDay} saveDailyJournal={this.saveDailyJournal}/>
            </div>
        )
    }
}
export default Journal;