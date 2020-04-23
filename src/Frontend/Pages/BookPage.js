import React, {Component} from 'react';
import RoomList from "../Components/Book/RoomList"
import './Pages.css';
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "../helpers/helpers";


class BookPage extends Component {

    state = {
        bookingSuccess: false,
        bookedRoom: null
    };

    bookRoomHandler = (room, user, date, timeslot) => {
        room.bookTimeslot(date, timeslot);
        user.addBooking(room, date, timeslot);
        this.setState({
            bookingSuccess: true,
            bookedRoom: room
        });
    };

    dismissSuccessMessage = () => {
        this.setState({
            bookingSuccess: false
        })
    };

    render() {
        return (
            <div>
                {/*DISPLAY BOOKING SUCCESS MESSAGE*/}
                {this.state.bookedRoom && (
                    <Snackbar open={this.state.bookingSuccess} autoHideDuration={5000}
                              onClose={this.dismissSuccessMessage}>
                        <Alert severity="success">
                            Your booking at {this.state.bookedRoom.name} has been confirmed.
                        </Alert>
                    </Snackbar>)}

                {/*DISPLAY AVAILABLE ROOMS PAGE*/}
                <div className="pages">{this.props.company.name} Meeting Rooms</div>
                <RoomList
                    company={this.props.company}
                    user={this.props.user}
                    bookRoomHandler={this.bookRoomHandler}/>
            </div>
        );
    }
}

export default BookPage;