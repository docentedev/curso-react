import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './containers/login/Login';

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Container className="mt-4">
          <Route path="/" exact component={Login} />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
