import React, {Component} from 'react';

import Room from './Room';
import './RoomList.css';

class RoomList extends Component {

    render() {
        const rooms = this.props.company.rooms.map(room => {
            return (
                <Room
                    key={room.name}
                    name={room.name}
                    capacity={room.capacity}
                    availability={room.availability}
                    timeslots={room.timeslots}
                    bookRoomHandler={this.props.bookRoomHandler}
                    room={room}
                    user={this.props.user}
                />
            );
        });
        return (
            <ul className="room__list">{rooms}</ul>
        )
    }
}

export default RoomList;
