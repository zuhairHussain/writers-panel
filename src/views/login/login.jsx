import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/actions';
import Container from '../../includes/container';
import Alert from '../../components/alerts/alerts';
import './login.scss';
import { Validator, ErrorMessages, isAllValid } from '../../services/validator';
import { history } from '../../history';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.validator = new Validator();
        this.state = {
            email: "",
            password: ""
        }
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            history.push('/');
        }
    }
    login() {
        const { email, password } = this.state
        let emailValid = this.validator.valid("email", email, true);
        let passValid = this.validator.valid("text", password, true);

        this.setState(emailValid.error ? { emailError: emailValid.message } : { emailError: '' })
        this.setState(passValid.error ? { passwordError: passValid.message } : { passwordError: '' })

        let isValid = isAllValid([emailValid.error, passValid.error]);

        if (isValid) {
            this.props.login(email, password);
        }
    }
    errorMessages(error) {
        return (
            <p className={error ? 'error' : 'd-none'}> {error ? error : ""}</p>
        );
    }
    render() {
        const { auth } = this.props;
        const { email, password, emailError, passwordError } = this.state;
        return (
            <Container className="login-wrapper" withoutNav container="container">
                <Alert type="danger" show={auth && auth.loginErrorMessage} text={auth.loginErrorMessage} />
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                            value={email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <ErrorMessages error={emailError} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            id="pwd"
                            value={password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        <ErrorMessages error={passwordError} />
                    </div>
                    <div className="text-center mt-4">
                        <button type="button" className="btn btn-primary" onClick={() => this.login()}>Submit</button>
                        <p className="mt-4">Don't have an account? <NavLink exact to='/sign-up'>Sign Up</NavLink></p>
                    </div>
                </form>
            </Container>
        );
    }
}

function mapState(state) {
    const { authReducer } = state;
    return { auth: authReducer };
}

const actionCreators = {
    login: loginRequest
};

export default connect(mapState, actionCreators)(Login);