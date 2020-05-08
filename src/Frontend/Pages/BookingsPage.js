import React, {Component} from 'react';
import BookingsList from "../Components/Booking/BookingsList";
import './Pages.css';
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "../helpers/helpers";
import RoomList from "../Components/Book/RoomList";


class BookingsPage extends Component {
    state = {
        cancellationSuccess: false,
        cancelledRoom: null,
    };

    cancelBookingHandler = (room, user, date, timeslot) => {
        room.cancelTimeslot(date, timeslot);
        user.cancelBooking(room, date, timeslot);
        this.setState({
            cancellationSuccess: true,
            cancelledRoom: room,
        });
    };

    dismissSuccessMessage = () => {
        this.setState({
            cancellationSuccess: false,
            cancelledRoom: null,
        })
    };

    render() {
        return (
            <div style={{backgroundColor: "#F5F5F5 "}}>
                {/*DISPLAY BOOKING CANCELLATION SUCCESS MESSAGE*/}
                {this.state.cancelledRoom && (
                    <Snackbar open={this.state.cancellationSuccess} autoHideDuration={3000}
                              onClose={this.dismissSuccessMessage}>
                        <Alert severity="success">
                            Your booking at {this.state.cancelledRoom.name} has been cancelled.
                        </Alert>
                    </Snackbar>)}

                {/*DISPLAY BOOKINGS PAGE*/}
                <div className="pages">My Bookings
                    <p>You may view details of your booking, or cancel it at any time.</p>
                </div>
                <BookingsList
                    className="booking__list"
                    company={this.props.company}
                    user={this.props.user}
                    cancelBookingHandler={this.cancelBookingHandler}/>

                {/*DISPLAY OUR FOOTER*/}
                <div className="footer">© 2020 JourneyWithJed</div>
            </div>
        );
    }
}

export default BookingsPage;