import React, {Component} from 'react';
import Timeslot from "./Timeslot";
import "./TimeslotPicker.css";
import Spinner from "../Spinner/Spinner";

class TimeslotPicker extends Component {

    selectedSlotHandler = (e) => {

        // RESET THE ACTIVE BUTTON
        for (let button of document.getElementsByClassName("timeslot-selected")) {
            button.className = "timeslot-active";
        }

        // ACTIVATE THE SELECTED BUTTON, ONLY IF IT IS ACTIVE
        if (this.props.availability[e.target.id]) {
            document.getElementById(e.target.id).className = "timeslot-selected";
        }

    };

    render() {

        // GENERATE TIMESLOTS TO BE PASSED ON LATER
        if (this.props.availability) {

            // RENDER THE TIMESLOT PICKER
            return (
                <div className="timeslot-picker">
                    <div className="top-row">
                        <Timeslot timeslot={0} active={this.props.availability[0]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={1} active={this.props.availability[1]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={2} active={this.props.availability[2]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={3} active={this.props.availability[3]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={4} active={this.props.availability[4]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={5} active={this.props.availability[5]} selectedSlotHandler={this.selectedSlotHandler}/>
                    </div>
                    <div className="bottom-row">
                        <Timeslot timeslot={6} active={this.props.availability[6]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={7} active={this.props.availability[7]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={8} active={this.props.availability[8]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={9} active={this.props.availability[9]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={10} active={this.props.availability[10]} selectedSlotHandler={this.selectedSlotHandler}/>
                        <Timeslot timeslot={11} active={this.props.availability[11]} selectedSlotHandler={this.selectedSlotHandler}/>
                    </div>
                </div>
            );
        }
        return <Spinner/>
    }
}

export default TimeslotPicker;