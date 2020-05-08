import {generateTime} from "../../helpers/helpers";
import Modal from "../Modal/Modal";
import React, {Component} from 'react';
import '../../Pages/Pages.css';
import '../Booking/Booking.css'
import adonis from "../../media/adonis.jpg";
import belmon from "../../media/belmon.jpg";
import canton from "../../media/canton.jpg";


class Booking extends Component {
    state = {
        cancelBookingModal: false,
    };

    openModal = () => {
        this.setState({cancelBookingModal: true});
    };

    modalCancelHandler = () => {
        this.setState({cancelBookingModal: false});
    };

    modalConfirmHandler = () => {
        this.setState({
            cancelBookingModal: false,
        });
        this.props.cancelBookingHandler(this.props.room, this.props.user, this.props.date, this.props.timeslot);
    };

    render() {
        const title = `Cancel ${this.props.room.name} Booking`;
        const images = {"adonis" : adonis, "belmon" : belmon, "canton" : canton};
        const meetingStartDate = new Date(this.props.date).toDateString();
        let meetingStartTime;
        if (this.props.timeslot < 12) {
            meetingStartTime = generateTime(this.props.timeslot);
        } else {
            meetingStartTime = generateTime(this.props.timeslot);
        }
        return (
            <React.Fragment>

                {/*DISPLAY BOOKING CANCELLATION MODAL*/}
                {this.state.cancelBookingModal && (
                    <Modal
                        title={title}
                        canCancel
                        canConfirm
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}
                        confirmText="Confirm"/>)}

                {/*DISPLAY LIST OF CURRENT BOOKINGS*/}
                <li className="bookings__list-item">
                    <div style={{background: "#ffffff", border: "0.5px solid #CCCCCC"}}>
                        <img src={images[this.props.room.name.toLowerCase()]} alt={this.props.room.name}/>
                        <h1>{this.props.room.name}</h1>
                        <p>{meetingStartDate}, {meetingStartTime}</p>
                        <button onClick={this.openModal}>Cancel Booking</button>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}

export default Booking;
