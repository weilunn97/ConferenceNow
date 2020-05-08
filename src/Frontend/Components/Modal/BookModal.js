import DatePicker from "react-datepicker";
import React, {Component} from 'react';
import TimeslotPicker from "../TimeslotPicker/TimeslotPicker"
import "react-datepicker/dist/react-datepicker.css";
import './BookModal.css';

class BookModal extends Component {

    state = {
        selectedDate: null,
        availability: null,
    };

    componentDidMount() {
        const currDate = new Date();
        currDate.setHours(0, 0, 0, 0);
        const currISODateStr = currDate.toISOString();
        const currAvail = this.props.room.availability[currISODateStr];
        this.setState({
            selectedDate: currDate,
            availability: currAvail,
        })
    }

    changeDate = date => {
        const room = this.props.room;
        date.setHours(0, 0, 0, 0);
        const availabilityOnDate = room.availability[date.toISOString()];
        this.setState({
            selectedDate: date,
            availability: availabilityOnDate,
        })
    };

    render() {
        return (
            <div className="bookmodal">
                <header className="bookmodal__header">
                    <h1>{this.props.title}</h1>
                </header>

                {/*DISPLAY DATE PICKER*/}
                <DatePicker className="bookmodal__calendar"
                    selected={this.state.selectedDate}
                    onChange={this.changeDate}
                    minDate={new Date()}
                    maxDate={new Date().setFullYear(new Date().getFullYear() + 1)}/>

                {/*DISPLAY TIMESLOT PICKER ONLY IF DATES HAVE BEEN SELECTED*/}
                {this.state.availability && (
                <div>
                    <TimeslotPicker availability={this.state.availability}/>
                </div>)}

                {/*DISPLAY ACTION BUTTONS*/}
                <section className="bookmodal__actions">
                    {this.props.canCancel && (
                        <button onClick={this.props.onCancel}>
                            Cancel
                        </button>
                    )}
                    {this.props.canConfirm && (
                        <button onClick={this.props.onConfirm}>
                            {this.props.confirmText}
                        </button>
                    )}
                </section>
            </div>
        )
    };
}

export default BookModal;
