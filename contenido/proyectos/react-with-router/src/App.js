import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Link } from "react-router-dom";

import './App.css';

import Home from './views/home/Home';
import About from './views/about/About';
import Users from './views/users/Users';
import UserDetail from "./views/user-detail/UserDetail";
import NoMatch from "./views/no-match/NoMatch";

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? "mi-link-activo" : ""}>
          {match ? "> " : ""}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
             <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
            </li>
            <li>
              <NavLink to="/about/" activeClassName="mi-link-activo">About</NavLink>
            </li>
            <li>
              <NavLink exact to="/users/" activeClassName="mi-link-activo">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" exact component={Users} />
        <Route path="/users/:id" exact component={UserDetail} />

        <Redirect from="/sobre/" to="/about/" />

        <Route component={NoMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
