import React, {Component} from 'react';
import Booking from './Booking';
import './BookingsList.css';

class BookingsList extends Component {

    render() {
        const bookings = this.props.user.bookings.map(booking => {
            return (
                <Booking
                    user={booking.user}
                    room={booking.room}
                    date={booking.date}
                    timeslot={booking.timeslot}
                    cancelBookingHandler={this.props.cancelBookingHandler}
                />
            );
        });
        return (
            <ul className="booking__list">{bookings}</ul>
        )
    }
}

export default BookingsList;
