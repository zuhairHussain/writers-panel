import React, { Component } from 'react';
import ErrorPage from './errorPage/errorPage';
import Loader from '../includes/loader'
import { history } from '../history';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { userData } from '../actions/actions';
import { PrivateRoute } from '../components/privateRoute';
import routes from '../routes'

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            {
              routes ? routes.map((route, i) => {
                let Component = route.private ? PrivateRoute : Route;
                return (
                  <Component key={i} exact={route.exact ? true : false} path={route.path} component={route.component} />
                )
              }
              ) : ""
            }
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </Router>
        <Loader show={this.props.loader} />
      </div>
    );
  }
}

function mapState(state) {
  const { loaderReducer } = state;
  return { loader: loaderReducer.loading };
}

const actionCreators = {
  fetchData: userData
};

export default connect(mapState, actionCreators)(App);
