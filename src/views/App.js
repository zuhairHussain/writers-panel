import React from 'react';
import ErrorPage from './errorPage/errorPage';
import Loader from '../includes/loader'
import { history } from '../history';
import { Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import routes from '../routes'

function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {
            routes ? routes.map(route => (<Route exact={route.exact ? "true" : "false"} path={route.path} component={route.component} />)) : ""
          }
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
