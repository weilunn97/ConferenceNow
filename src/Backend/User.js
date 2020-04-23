import Booking from "./Booking";

class User {
    constructor(company, name) {
        this.company = company;
        this.name = name;
        this.bookings = [];
    }

    addBooking = (room, date, timeslot) => {
        const booking = new Booking(this, room, date, timeslot);
        this.bookings.push(booking);
    };

    cancelBooking = (room, date, timeslot) => {
        for (let i=0; i<this.bookings.length; i++) {
            if (this.bookings[i].room === room &&
                this.bookings[i].date === date &&
                this.bookings[i].timeslot === timeslot) {
                this.bookings.splice(i, 1);
                return true;
            }
        }
    };
}

export default User;