import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';

import './App.css';

import store from './store';

import Login from './containers/login/Login';
import Dashboard from './containers/dashboard/Dashboard';
import Users from './containers/users/Users';
import Menu from './components/menu/Menu';

function PrivateRoute({ component: Component, ...rest }) {
  const token = useSelector(store => {
    if (store.auth.login.data) return store.auth.login.data.token;
    return false;
  });
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

function App() {
  return (
    <Provider store={store} >
      <Router>
        <PrivateRoute path="/dashboard" component={Menu} />
        <Container className="mt-4">
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/dashboard/users" exact component={Users} />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
