import React, { Component } from 'react';

class Nav extends Component {
    state = {}
    render() {
        return (
            <nav className="side-nav">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#"><i className="icon home" /> Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="icon acc-bill"></i> Account &amp; Billing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="icon acc"></i> Account Details</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;