import React, { Component } from 'react';
import Container from '../../includes/container';
import './dashboard.scss';

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <Container className="dashboard-wrapper">
                <h4 className="mb-5">Welcome Ali</h4>
            </Container>
        );
    }
}

export default Dashboard;