import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import './BookModal.css';

class BookModal extends Component {

    componentDidMount() {
        console.log(this.props.room);
    }

    render() {
        return (
            <div className="bookmodal">
                <header className="bookmodal__header">
                    <h1>{this.props.title}</h1>
                </header>
                <section className="bookmodal__content">{this.props.children}</section>
                <section className="bookmodal__calendar">
                    <DatePicker selected={startDate} onChange={date => setStartDate(new Date()} />
                </section>
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
