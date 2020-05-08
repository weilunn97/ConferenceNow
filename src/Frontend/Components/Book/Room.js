import BookModal from "../Modal/BookModal";
import adonis from "../../media/adonis.jpg";
import belmon from "../../media/belmon.jpg";
import canton from "../../media/canton.jpg";
import React, {Component} from 'react';
import '../../Pages/Pages.css';
import './Room.css';

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

        // GET THE CURRENTLY SELECTED DATE
        let selectedDate = document.getElementsByClassName("bookmodal__calendar")[0].value;
        selectedDate = new Date(selectedDate);
        selectedDate.setHours(0, 0, 0, 0);
        selectedDate = selectedDate.toISOString();

        // GET THE CURRENTLY SELECTED TIMESLOT
        const selectedButton = document.getElementsByClassName("timeslot-selected")[0];
        const selectedTimeslot = selectedButton.id;

        // BOOK THE ROOM
        this.props.bookRoomHandler(this.props.room, this.props.user, selectedDate, selectedTimeslot);
    };

    render() {
        const title = `Book ${this.props.name} Room`;
        const images = {"adonis" : adonis, "belmon" : belmon, "canton" : canton};
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
                    <div style={{background: "#ffffff", border: "0.5px solid #CCCCCC"}}>
                        <img src={images[this.props.room.name.toLowerCase()]} alt={this.props.room.name}/>
                        <h1>{this.props.name}</h1>
                        <p>Seating Capacity : {this.props.room.capacity}</p>
                        <p>Video Conferencing : {this.props.room.videoConf ? "Yes" : "No"}</p>
                        <button onClick={this.openModal}>Book</button>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}

export default Room;
