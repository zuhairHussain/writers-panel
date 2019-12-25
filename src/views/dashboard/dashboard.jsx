import React, { Component } from 'react';
import Container from '../../includes/container';
import './dashboard.scss';

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <Container className="dashboard-wrapper">
                <h4 className="mb-5">Welcome Ali khan</h4>
                <div className="no-log">
                    <h2 className="cmp-hed">PureVPN</h2>
                    <p className="cmp-para">No Log Certified by One of the leading Auditors</p>
                    <a href="https://my.purevpn.com/pdf/Privacy_No_Log_Audit_Report.pdf" className="cmp-cta font-h" download="">DOWNLOAD REPORT</a>
                </div>

                <div className="bygv-camp-home mt-4">
                    <h2 className="cmp-hed"><b>Celebrate, Invite &amp; Gift</b></h2>
                    <p className="cmp-para">PureVPN users can send up to 12 free monthly accounts to friends, family and colleagues</p>
                    <a href="/invite" className="cmp-cta font-h">Send Invite Now</a>
                    <p className="cmp-note">*Note: All invites must be sent before 1 month</p>
                </div>

                <h4 className="mb-3 mt-5">Package Plan</h4>
                <div className="table-list">
                    <div className="table-row">
                        <div className="table-col">
                            <span className="small-text">Package Plan</span>
                            Monthly
                        </div>
                        <div className="table-col">
                            <span className="small-text">Days Left</span>
                            3
                        </div>
                        <div className="table-col">
                            <span className="small-text">Expiry</span>
                            2019-12-14
                        </div>
                        <div className="table-col align-right">
                            <a href="https://my.purevpn.com/accountupgrade" className="btn btn-primary">Renew Subscription</a>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-col">
                            <span className="small-text">Package Plan</span>
                            Monthly
                        </div>
                        <div className="table-col">
                            <span className="small-text">Days Left</span>
                            3
                        </div>
                        <div className="table-col">
                            <span className="small-text">Expiry</span>
                            2019-12-14
                        </div>
                        <div className="table-col align-right">
                            <a href="https://my.purevpn.com/accountupgrade" className="btn btn-primary">Renew Subscription</a>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-col">
                            <span className="small-text">Package Plan</span>
                            Monthly
                        </div>
                        <div className="table-col">
                            <span className="small-text">Days Left</span>
                            3
                        </div>
                        <div className="table-col">
                            <span className="small-text">Expiry</span>
                            2019-12-14
                        </div>
                        <div className="table-col align-right">

                        </div>
                    </div>
                </div>


            </Container >
        );
    }
}

export default Dashboard;