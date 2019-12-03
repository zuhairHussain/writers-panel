import React from 'react';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import ErrorPage from './errorPage/errorPage';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from "react-router-dom";
const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <ErrorPage errCode="404" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
