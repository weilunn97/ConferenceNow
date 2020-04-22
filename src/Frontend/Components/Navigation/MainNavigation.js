import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <h1>MeetUp</h1>
        </div>
        <nav className="main-navigation__items">
            <ul>
                <li>
                    <NavLink to="/book">Book A Room</NavLink>
                </li>
                <li>
                    <NavLink to="/bookings">View My Bookings</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default MainNavigation;