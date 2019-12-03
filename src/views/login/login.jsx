import React, { Component } from 'react';
import Container from '../../includes/container';
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Container className="login-wrapper" withoutNav>
                <img className="top-img" src={require("../../assets/images/login-img.png")} alt="login" />
                <h2 className="text-center mb-4">Member Login</h2>
                <form action="/action_page.php">
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" /> Remember me
                        </label>
                        <a href="/forgotpassword" className="forgot-password float-right">Forgot Your Password?</a>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <p class="mt-4">Don't have an account? <a href="https://www.purevpn.com/order" target="_blank">Sign Up</a></p>
                    </div>
                </form>
            </Container>
        );
    }
}

export default Login;