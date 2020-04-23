import Room from "./Room";

class Company {
    constructor(name) {
        this.name = name;
        this.rooms = [];
        this.initializeRooms();
    };

    initializeRooms = () => {
        const room1 = new Room("Adonis", 10);
        const room2 = new Room("Belmon", 20);
        const room3 = new Room("Canton", 50);
        this.addRoom(room1);
        this.addRoom(room2);
        this.addRoom(room3);
    };

    addRoom = room => {
        this.rooms.push(room);
    };
}

export default Company;