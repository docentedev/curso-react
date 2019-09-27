import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import PrivateRoute from './components/private-route/PrivateRoute';

import store from './store';

import Footer from './components/footer/Footer';

import HomeView from './views/home/Home';

import UserListView from './views/user-list/UserList';
import LoginView from './views/login/Login';
import UserCreate from './views/user-create/UserCreate';

import Header from './components/header/Header';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={HomeView} />
          
          <PrivateRoute path="/dashboard" component={Header} />
          <PrivateRoute path="/dashboard/users" exact component={UserListView} />
          <PrivateRoute path="/dashboard/users/create" exact component={UserCreate} />
          <Route path="/login" exact component={LoginView} />
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
