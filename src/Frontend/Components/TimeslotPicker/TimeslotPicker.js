import React, {Component} from 'react';
import Timeslot from "./Timeslot";
import "./TimeslotPicker.css";

class TimeslotPicker extends Component {

    state = {
        allowChoice: Array(this.props.availability.length).fill(true),
        avail: this.props.availability,
    };

    selectedSlotHandler = (e) => {
        console.log('BUTTON ID : ' + e.target.id);

        // RESET THE ACTIVE BUTTON
        for (let button of document.getElementsByClassName("timeslot-selected")) {
            button.className = "timeslot-active";
        }

        // ACTIVATE THE SELECTED BUTTON, ONLY IF IT IS ACTIVE
        if (this.state.avail[e.target.id]) {
            document.getElementById(e.target.id).className = "timeslot-selected";
        }

    };

    render() {

        // GENERATE TIMESLOTS TO BE PASSED ON LATER
        if (this.state.allowChoice.length === 12 && this.state.avail.length === 12) {

            // GENERATE ACTIVENESS MASK
            const active = this.state.allowChoice.map((b, i) => b && this.state.avail[i]);
            console.log(this.state.allowChoice);
            console.log(this.state.avail);
            console.log(this.state.active);

            // RENDER THE TIMESLOT PICKER
            return (
                <div className="timeslot-picker">
                    <div className="top-row">
                        <Timeslot timeslot={0} active={active[0]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={1} active={active[1]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={2} active={active[2]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={3} active={active[3]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={4} active={active[4]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={5} active={active[5]} selectedSlotHandler={this.selectedSlotHandler}/>
                    </div>
                    <div className="bottom-row">
                        <Timeslot timeslot={6} active={active[6]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={7} active={active[7]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={8} active={active[8]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={9} active={active[9]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={10} active={active[10]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={11} active={active[11]} selectedSlotHandler={this.selectedSlotHandler}/>
                    </div>
                </div>
            );
        }
    }
}

export default TimeslotPicker;