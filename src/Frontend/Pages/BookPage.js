import React, {Component} from 'react';
import RoomList from "../Components/Book/RoomList"
import './Pages.css';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class BookPage extends Component {

    state = {
        bookingSuccess: false
    };

    bookRoomHandler = (room, user, date, timeslot) => {
        room.bookTimeslot(date, timeslot);
        user.addBooking(room, date, timeslot)
        this.setState({
            bookingSuccess: true
        });
    };

    dismissSuccessMesssage = () => {
        this.setState({
            bookingSuccess: false
        })
    };

    render() {
        return (
            <div>
                {/*DISPLAY BOOKING SUCCESS MESSAGE*/}
                <Snackbar open={this.state.bookingSuccess} autoHideDuration={3000}
                          onClose={this.dismissSuccessMesssage}>
                    <Alert severity="success">
                        Your booking at {this.props.name} has been confirmed.
                    </Alert>
                </Snackbar>

                {/*DISPLAY AVAILABLE ROOMS PAGE*/}
                <div className="pages">{this.props.company.name} Meeting Rooms</div>
                <RoomList
                    company={this.props.company}
                    user={this.props.user}
                    bookRoomHandler={this.bookRoomHandler}/>
            </div>
        );
    }
}

export default BookPage;