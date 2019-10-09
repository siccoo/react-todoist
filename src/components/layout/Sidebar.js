import React, { Component } from 'react'

class Sidebar extends Component {
    

    render() {
        return (
            <div className="sidebar" data-testid="sidebar">
                <ul className="sidebar-generic"> 
                    <li>Inbox</li>
                    <li>Today</li>
                    <li>Next 7 days</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar

