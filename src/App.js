import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BookPage from './Frontend/Pages/BookPage';
import BookingsPage from './Frontend/Pages/BookingsPage';
import Company from "./Backend/Company";
import MainNavigation from './Frontend/Components/Navigation/MainNavigation';
import Spinner from "./Frontend/Components/Spinner/Spinner";
import User from "./Backend/User";

class App extends Component {
    state = {
        user: null,
        company: null,
    };

    componentDidMount() {
        const my_company = new Company('GovTech');
        const my_user = new User(my_company, 'Tan');
        this.setState({
            company: my_company,
            user: my_user
        })
    }

    cancelBookingHandler = (room, user, date, timeslot) => {
        room.cancelTimeslot(date, timeslot);
        user.cancelBooking(room, date, timeslot);
    };

    render() {
        if (this.state.company && this.state.user) {
            return (
                <BrowserRouter>
                    <React.Fragment>
                        <MainNavigation/>
                        <main className="main-content">
                            <Switch>
                                {/*<Route path="/book" company={this.state.company} user={this.state.user}*/}
                                {/*       component={BookPage}/>*/}
                                {/*<Route path="/bookings" company={this.state.company} user={this.state.user}*/}
                                {/*       component={BookingsPage}/>*/}
                                <Route
                                    path="/book"
                                    render={(routeProps) => (<BookPage {...routeProps}
                                                             company={this.state.company}
                                                             user={this.state.user}/>)}/>

                                <Route
                                    path="/bookings"
                                    render={(routeProps) => (<BookingsPage {...routeProps}
                                                                       company={this.state.company}
                                                                       user={this.state.user}
                                                                       cancelBookingHandler={this.cancelBookingHandler}/>)}/>

                                        </Switch>
                                        </main>
                                        </React.Fragment>
                                        </BrowserRouter>
                                        );
                                        } else {
                                        return (
                                        <Spinner/>
                                        )
                                        }
                                        }
                                        }

                                        export default App;