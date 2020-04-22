import React, {Component} from 'react';
import deluxe_room from "../../media/deluxe_room.jpg";
import './Room.css';
import BookModal from "../Modal/BookModal";
import '../../Pages/Pages.css';

class Room extends Component {
    state = {
        bookModal: false,
    };

    openModal = () => {
        this.setState({bookModal: true});
    };

    modalCancelHandler = () => {
        this.setState({bookModal: false});
    };

    modalConfirmHandler = () => {
        this.setState({
            bookModal: false,
        });
        // DEBUG
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        date = date.toISOString();
        const timeslot = 0;
        // DEBUG
        this.props.bookRoomHandler(this.props.room, this.props.user, date, timeslot);
    };

    render() {
        const title = `Book ${this.props.name} Room`;
        return (
            <React.Fragment>

                {/*DISPLAY BOOKING CONFIRMATION MODAL*/}
                {this.state.bookModal && (
                    <BookModal
                        title={title}
                        room={this.props.room}
                        canCancel
                        canConfirm
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}
                        confirmText="Book"/>)}

                {/*DISPLAY LIST OF ROOMS AVAILABLE FOR BOOKING*/}
                <li key={this.props.name} className="rooms__list-item">
                    <div>
                        <img src={deluxe_room} alt="deluxe_room"/>
                        <h1>{this.props.name}</h1>
                        <p>Up to {this.props.capacity} guests</p>
                        <button onClick={this.openModal}>Book</button>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}

export default Room;
