import React, { Component } from 'react';
import Container from '../../includes/container';
import './errorPage.scss';

export default class ErrorPage extends Component {
    render() {
        const { errCode } = this.props;
        return (
            <Container className="notfound-wrapper text-center" withoutNav container="container">
                <h1 className="section-heading">You weren't supposed to be here.</h1>
                <h2 className="error_num">{errCode && errCode}</h2>
                <p className="section-para">Trace your way back to the <a href="https://my.purevpn.com">home page</a> or get in touch with our support team. If you were looking for the fastest VPN, then it can be found here.</p>
                <div className="uni-cta-wrapper">
                    <a href="https://my.purevpn.com/accountupgrade" className="btn btn-primary btn-lg ">Get PureVPN</a>
                    <p className="text-center mt-3">31-Day Money-Back Guarantee</p>
                </div>
            </Container>
        );
    }
}
