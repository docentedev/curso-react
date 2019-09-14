import React from 'react';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import Home from './containers/home/Home';
import Users from './containers/users/Users';

import './App.css';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <NavBar />
      <Container className="mt-4">
        
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
        
      </Container>
      </Router>
    </Provider>
  );
}

export default App;
