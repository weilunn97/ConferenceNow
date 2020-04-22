import {addDays} from 'date-fns';

class Room {
    constructor(name, capacity, timeslots = 12) {
        this.name = name;
        this.capacity = capacity;
        this.availability = {};
        this.timeslots = timeslots;
        this.initializeAvailability(365);
    }

    initializeAvailability = (days) => {

        // GET DATE AVAILABILITY
        const dateArr = [];
        const currDate = new Date();
        currDate.setHours(0, 0, 0, 0);
        for (let i = 0; i < days; i++) {
            dateArr.push(addDays(currDate, i).toISOString());
        }

        // GET TIMESLOT AVAILABILITY
        const timeslots = Array(this.timeslots).fill(true);

        // MAP {DATE : [TIMESLOTS]}
        for (let date of dateArr) {
            this.availability[date] = timeslots;
        }
    };

    bookTimeslot = (date, slotNumber) => {

        // CHECK AVAILABILITY FIRST
        console.log(date, slotNumber);
        console.log(this.availability[date]);
        if (this.availability[date][slotNumber]) {
            this.availability[date][slotNumber] = false;
            console.log(`${date} | Slot ${slotNumber} successfully booked.`);
            return true
        } else {
            console.log(`${date} | Slot ${slotNumber} is taken.`);
            throw new Error("Slot is taken");
        }
    };

    cancelTimeslot = (date, slotNumber) => {
        this.availability[date][slotNumber] = true;
        return true;
    };
}

export default Room;