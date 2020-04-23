import React, {Component} from 'react';
import "./TimeslotPicker.css";
import {generateTime} from "../../helpers/helpers";

class Timeslot extends Component {

    render() {
        const classname =`timeslot-${(this.props.active) ? "active" : "inactive"}`;
        return (
            <button
                id={this.props.timeslot}
                className={classname}
                onClick={this.props.selectedSlotHandler}>{generateTime(this.props.timeslot)}</button>
        );
    }
}

export default Timeslot;