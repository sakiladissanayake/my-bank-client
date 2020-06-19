import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('cool-jwt')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)