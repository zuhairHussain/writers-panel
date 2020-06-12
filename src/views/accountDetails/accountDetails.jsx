import React, { Component } from 'react';
import Container from '../../includes/container';
import Switch from '../../components/switch/switch';
import './accountDetails.scss';

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiveEmails: false
        }
    }
    toggleSwitch() {
        this.setState({ receiveEmails: !this.state.receiveEmails });
    }
    render() {
        const { receiveEmails } = this.state;
        return (
            <Container className="acc-billing-wrapper">
                <h4 className="mb-1">Account Details</h4>
                <p className="mb-5">Here are the details of your accounts and invoices.</p>
                <div className="sub-heading-wrapper">
                    <h5 className="d-inline-block mb-3">Personal Info</h5>
                </div>
                <p className="d-inline-block mr-3"><b>Name: </b><span>Ali</span></p>
                <p className="d-inline-block"><b>Email: </b><span>ali@gmail.com</span></p>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

                <h5 className="mt-5">Subscription Details:</h5>
                <hr />

            </Container>
        );
    }
}