import React, { Component } from 'react';
import Container from '../../includes/container';
import './dashboard.scss';

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <Container className="dashboard-wrapper">
                <h3>Dashboard</h3>
            </Container>
        );
    }
}

export default Dashboard;