import DayJournal from '../containers/DayJournal';
import {Component} from 'react';

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
                currentDay: res.count + 1,
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
            buttons.push(<span key={id} id={id} onClick={this.loadDayJournal}>{id}</span>);
            count--;
        }
        return buttons;
    }

    loadDayJournal = e => {
        this.setState({targetDay: e.target.id});
    }
    
    render(){
        return(
            <div>
                <div className="days-div">
                    {this.renderDaysButtons()}
                </div>
                <DayJournal targetDay={this.state.targetDay}/>
            </div>
        )
    }
}
export default Journal;