import Booking from "./Booking";

class User {
    constructor(company, name) {
        this.company = company;
        this.name = name;
        this.bookings = [];
        // this.createDummyBooking();
    }

    createDummyBooking = () => {
        const b1 = new Booking(this, this.company.rooms[0], new Date(2020, 4, 22, 0, 0, 0, 0), 0);
        const b2 = new Booking(this, this.company.rooms[0], new Date(2020, 4, 23, 0, 0, 0, 0), 1);
        const b3 = new Booking(this, this.company.rooms[0], new Date(2020, 4, 24, 0, 0, 0, 0), 2);
        this.bookings.push.apply(this.bookings, [b1, b2, b3]);
    };

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
                console.log(i, this.bookings);
                return true;
            }
        }
    };
}

export default User;