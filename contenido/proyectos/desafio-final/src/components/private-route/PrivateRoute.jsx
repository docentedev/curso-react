import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const jwt = !!useSelector(store => store.auth.login.data);
    return (
        <Route {...rest} render={props => (
            jwt ? <Component {...props} /> : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;