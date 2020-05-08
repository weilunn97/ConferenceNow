import {addDays} from 'date-fns';

class Room {
    constructor(name, capacity, timeslots = 12, videoConf = true) {
        this.name = name;
        this.capacity = capacity;
        this.availability = {};
        this.timeslots = timeslots;
        this.videoConf = true;
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

        // MAP {DATE : [TIMESLOTS]}
        for (let date of dateArr) {
            this.availability[date] = new Array(this.timeslots).fill(true);
        }
    };

    bookTimeslot = (date, slotNumber) => {

        // CHECK AVAILABILITY FIRST
        if (this.availability[date][slotNumber]) {
            this.availability[date][slotNumber] = false;
            return true
        } else {
            throw new Error("Slot is taken");
        }
    };

    cancelTimeslot = (date, slotNumber) => {
        this.availability[date][slotNumber] = true;
        return true;
    };
}

export default Room;