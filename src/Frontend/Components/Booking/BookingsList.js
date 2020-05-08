import Booking from './Booking';
import React, {Component} from 'react';
import './BookingsList.css';

class BookingsList extends Component {

    render() {
        const bookings = this.props.user.bookings.map(booking => {
            return (
                <Booking
                    key={`${booking.user}-${booking.room}-${booking.date}`}
                    user={booking.user}
                    room={booking.room}
                    date={booking.date}
                    timeslot={booking.timeslot}
                    cancelBookingHandler={this.props.cancelBookingHandler}
                />
            );
        });
        return (
            <ul className="bookings__list">{bookings}</ul>
        )
    }
}

export default BookingsList;
