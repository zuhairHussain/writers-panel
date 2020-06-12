import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'reactstrap';
import createOrder from '../assets/images/order-create.svg';
import createListing from '../assets/images/order-listing.svg';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltip1Open: false,
            tooltip2Open: false
        }
    }
    toggle = (state) => {
        this.setState({ [state]: !this.state[state] })
    }
    render() {
        const { navOpen } = this.props;
        const { tooltip1Open, tooltip2Open } = this.state;

        return (
            <nav className={navOpen + " side-nav"}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink exact to='/' className="nav-link" activeClassName="active" id="createOrder">
                            <img alt="Create Order" src={createOrder} />
                            <Tooltip placement="right" isOpen={tooltip1Open} target="createOrder" toggle={() => this.toggle('tooltip1Open')} fade={true} delay={1}>
                                Create Order
                            </Tooltip>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/accountdetails' className="nav-link" activeClassName="active" id="myOrder">
                            <img alt="My Orders" src={createListing} />
                            <Tooltip placement="right" isOpen={tooltip2Open} target="myOrder" toggle={() => this.toggle('tooltip2Open')} fade={true} delay={1}>
                                My Orders
                            </Tooltip>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;