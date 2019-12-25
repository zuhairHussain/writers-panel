import React, { Component } from 'react';
import Container from '../../includes/container';
import Switch from '../../components/switch/switch';
import './accountBilling.scss';

export default class AccountBilling extends Component {
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
                <h4 className="mb-5">Account & Billing</h4>
                <div className="sub-heading-wrapper">
                    <h5 className="d-inline-block mr-3 mb-0">Account Information</h5>
                    <span className="d-inline-block clickable">Change Member Area Password</span>
                </div>
                <hr />
                <p className="mb-1"><b>Name: </b><span>Ali khan</span></p>
                <p className="mb-1"><b>Email: </b><span>ali.khan@gaditek.com</span></p>
                <p className="mb-1"><b>Number of Subscriptions: </b><span> 45 </span></p>
                <div className="mt-4 cursor-pointer" onClick={() => this.toggleSwitch()}>
                    <span className="mr-3">
                        <Switch checked={receiveEmails ? 'checked' : ''} />
                    </span>
                    <span className="d-inline-block mt-1"> Please check the box if you do not wish to receive email offers and other marketing emails relevant to PureVPN.</span>
                </div>

                <h5 className="mt-5">Subscription Details:</h5>
                <hr />
                <div className="table-list sm">
                    <div className="table-row">
                        <div className="table-col">
                            <span className="small-text">Username</span>
                            purevpn0s8561344
                        </div>
                        <div className="table-col">
                            <span className="small-text">Subscription Type</span>
                            Monthly
                        </div>
                        <div className="table-col">
                            <span className="small-text">Expiry</span>
                            14-01-2020
                        </div>
                        <div className="table-col">
                            <span className="small-text">Status</span>
                            Upgrade Subscription
                        </div>
                        <div className="table-col">
                            <span className="small-text">Payment Method</span>
                            <span className="gateway-icon payment-gateway-paypal-icon"></span>
                        </div>
                        <div className="table-col menu">
                            <div className="btn-group user-info">
                                <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="list-menu"></span>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">Payment Details</button>
                                    <button className="dropdown-item" type="button">Change Payment Details</button>
                                    <button className="dropdown-item" type="button">Restart Subscription</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-row">
                        <div className="table-col">
                            <span className="small-text">Username</span>
                            purevpn0s8561344
                        </div>
                        <div className="table-col">
                            <span className="small-text">Subscription Type</span>
                            Monthly
                        </div>
                        <div className="table-col">
                            <span className="small-text">Expiry</span>
                            14-01-2020
                        </div>
                        <div className="table-col">
                            <span className="small-text">Status</span>
                            Upgrade Subscription
                        </div>
                        <div className="table-col">
                            <span className="small-text">Payment Method</span>
                            PayPal
                        </div>
                    </div>
                </div>

            </Container>
        );
    }
}