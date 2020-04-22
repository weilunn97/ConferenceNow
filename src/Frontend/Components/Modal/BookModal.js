import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookModal.css';

class BookModal extends Component {

    state = {
        selectedDate: new Date()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        // COMPUTE OUR EXCLUDED DATES
        const room = this.props.room;
        let date = this.state.selectedDate;
        date.setHours(0, 0, 0, 0);
        date = date.toISOString();
        const availabilityOnDate = room.availability[date];
        console.log('PICKED DATE  : '+ date);
        console.log('AVAILABILITY : ' + availabilityOnDate[0]);
    };

    changeDate = date => {
        this.setState({
            selectedDate: date
        })
    }

    render() {
        return (
            <div className="bookmodal">
                <header className="bookmodal__header">
                    <h1>{this.props.title}</h1>
                </header>
                <section className="bookmodal__content">Select A Date</section>
                <DatePicker className="bookmodal_calendar"
                    selected={this.state.selectedDate}
                    onChange={this.changeDate}
                    minDate={new Date()}/>
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
