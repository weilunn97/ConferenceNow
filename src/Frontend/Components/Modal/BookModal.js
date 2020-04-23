import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import TimeslotPicker from "../TimeslotPicker/TimeslotPicker"
import "react-datepicker/dist/react-datepicker.css";
import './BookModal.css';

class BookModal extends Component {

    state = {
        selectedDate: null
    };

    changeDate = date => {
        this.setState({
            selectedDate: date
        })
    }

    render() {

        // COMPUTE AVAILABILITY, IF ANY
        let availabilityOnDate = null;
        if (this.state.selectedDate) {
            const room = this.props.room;
            let date = this.state.selectedDate;
            date.setHours(0, 0, 0, 0);
            date = date.toISOString();
            availabilityOnDate = room.availability[date];
            console.log('PICKED DATE  : '+ date);
            console.log('AVAILABILITY : ' + availabilityOnDate[0]);
        }

        return (
            <div className="bookmodal">
                <header className="bookmodal__header">
                    <h1>{this.props.title}</h1>
                </header>
                <section className="bookmodal__content">Select A Date</section>

                {/*DISPLAY DATE PICKER*/}
                <DatePicker className="bookmodal__calendar"
                    selected={this.state.selectedDate}
                    onChange={this.changeDate}
                    minDate={new Date()}/>

                {/*DISPLAY TIMESLOT PICKER ONLY IF DATES HAVE BEEN SELECTED*/}
                {availabilityOnDate && (
                <div>
                    <TimeslotPicker availability={availabilityOnDate}/>
                </div>)}

                {/*DISPLAY ACTION BUTTONS*/}
                <section className="bookmodal__actions">
                    {this.props.canCancel && (
                        <button className="btn" onClick={this.props.onCancel}>
                            Cancel
                        </button>
                    )}
                    {this.props.canConfirm && (
                        <button className="btn" onClick={this.props.onConfirm}>
                            {this.props.confirmText}
                        </button>
                    )}
                </section>
            </div>
        )
    }
}

export default BookModal;
