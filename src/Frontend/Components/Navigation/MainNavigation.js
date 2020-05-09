import React from 'react';
import {NavLink} from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation = props => (
    <header className="main-navigation">
        <div>
            <NavLink className="main-navigation__logo" to="/">ConferenceNow</NavLink>
        </div>
        <nav className="main-navigation__items">
            <ul>
                <li>
                    <NavLink to="/book">Book</NavLink>
                </li>
                <li>
                    <NavLink to="/bookings">My Bookings</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default MainNavigation;