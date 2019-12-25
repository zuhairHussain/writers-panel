import React from 'react';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import ErrorPage from './errorPage/errorPage';
import AccountBilling from './accountBilling/accountBilling';
import Loader from '../includes/loader'
import { history } from '../history';
import { Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/billing" component={AccountBilling} />
          <Route path="*">
            <ErrorPage errCode="404" />
          </Route>
        </Switch>
      </Router>
      <Loader show={props.loader} />
    </div>
  );
}

function mapState(state) {
  const { loaderReducer } = state;
  return { loader: loaderReducer.loading };
}

export default connect(mapState)(App);
