import React, { Component } from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-testid="sidebar">
                <ul className="sidebar__generic"> 
                    <li data-testid="inbox" className="inbox">
                        <span><FaInbox /></span>
                        <span>Inbox</span>
                    </li>
                    <li data-testid="today" className="today">
                        <span><FaRegCalendar /></span>
                        <span>Today</span>
                    </li>
                    <li data-testid="next_7" className="next_7">
                        <span><FaRegCalendarAlt /></span>
                        <span>Next 7 days</span>
                    </li>
                </ul>

                <div className="sidebar__middle">
                    <span>
                        <FaChevronDown />
                    </span>
                    <h2>Projects</h2>
                </div>

                <ul className="sidebar__projects">
                    Projects will be here!!
                </ul>
            </div>
        )
    }
}

// b = block;
// e = element;
// m = modifier

export default Sidebar;

