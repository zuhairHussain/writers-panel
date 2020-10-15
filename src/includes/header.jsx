import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { logoutRequest } from '../actions/actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }
    toggle = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen })
    }
    render() {
        const { withoutNav } = this.props;
        const { dropdownOpen } = this.state;

        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid header-fluid">
                        {
                            !withoutNav && (
                                <button onClick={() => this.props.toggleNav()} className="navbar-toggler" type="button">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            )
                        }
                        <a className="navbar-brand mr-auto" href="/">
                            UV Writers
                            {/*<img src={require('../assets/images/logo.png')} className="img-fluid" alt="logo" />*/}
                        </a>

                        <ButtonDropdown className="user-info" isOpen={dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle>
                                <span className="user-acc-ico" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="img-fluid" src={require("../assets/images/user-icon.png")} alt="user" />
                                </span>
                            </DropdownToggle>
                            <DropdownMenu>
                                {/*<DropdownItem disabled>fahadu11@yopmail.com</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>My Account</DropdownItem>*/}
                                <DropdownItem onClick={() => this.props.logout()}>Sign Out</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </nav>
            </header >
        );
    }
}

function mapState(state) {
    // const { authReducer } = state;
    // return { auth: authReducer };
}

const actionCreators = {
    logout: logoutRequest
};

export default connect(null, actionCreators)(Header);