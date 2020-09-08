import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../../actions/actions';
import Container from '../../includes/container';
import Alert from '../../components/alerts/alerts';
import './register.scss';
import { Validator, ErrorMessages, isAllValid } from '../../services/validator';
import { history } from '../../history';
import { NavLink } from 'react-router-dom';
class Register extends Component {
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
    register() {
        const { userName, email, password } = this.state
        let userNameValid = this.validator.valid("text", userName, true);
        let emailValid = this.validator.valid("email", email, true);
        let passValid = this.validator.valid("text", password, true);

        this.setState(userNameValid.error ? { userNameError: userNameValid.message } : { userNameError: '' })
        this.setState(emailValid.error ? { emailError: emailValid.message } : { emailError: '' })
        this.setState(passValid.error ? { passwordError: passValid.message } : { passwordError: '' })

        let isValid = isAllValid([userNameValid.error, emailValid.error, passValid.error]);

        if (isValid) {
            this.props.register(userName, email, password);
        }
    }
    errorMessages(error) {
        return (
            <p className={error ? 'error' : 'd-none'}> {error ? error : ""}</p>
        );
    }
    render() {
        const { registerReducer } = this.props;
        const { userName, email, password, userNameError, emailError, passwordError } = this.state;
        return (
            <Container className="login-wrapper" withoutNav container="container">
                <Alert type="danger" show={registerReducer && registerReducer.registerErrorMessage} text={registerReducer.registerErrorMessage} />
                <form>
                    <div className="form-group">
                        <label htmlFor="userName">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            id="userName"
                            value={userName}
                            onChange={(e) => this.setState({ userName: e.target.value })}
                        />
                        <ErrorMessages error={userNameError} />
                    </div>
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
                        <button type="button" className="btn btn-primary" onClick={() => this.register()}>Submit</button>
                        <p className="mt-4">Already have an account? <NavLink exact to='/login'>Login</NavLink></p>
                    </div>
                </form>
            </Container>
        );
    }
}

function mapState(state) {
    const { registerReducer } = state;
    return { registerReducer: registerReducer };
}

const actionCreators = {
    register: registerRequest
};

export default connect(mapState, actionCreators)(Register);