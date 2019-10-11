import React, { Component } from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-testid="sidebar">
                <ul className="sidebar__generic"> 
                    <li>
                        <span><FaInbox /></span>
                        <span>Inbox</span>
                    </li>
                    <li>
                        <span><FaRegCalendar /></span>
                        <span>Today</span>
                    </li>
                    <li>
                        <span><FaRegCalendarAlt /></span>
                        <span>Next 7 days</span>
                    </li>
                </ul>
            </div>
        )
    }
}

// b = block;
// e = element;
// m = modifier

export default Sidebar

