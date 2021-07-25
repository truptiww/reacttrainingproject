import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute ({ isAuth, Component, ...rest}) {
    return(
    <Route
      {...rest}
      render={props => isAuth === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location} }} />}
    />
    )
    };

    // const PrivateRoute = ({isAuth, Component, ...rest}) => {
    //     return (
    
    //         // Show the component only when the user is logged in
    //         // Otherwise, redirect the user to /login page
    //         <Route {...rest} render={props => (
    //             isAuth() ?
    //                 <Component {...props} />
    //             : <Redirect to="/login" />
    //         )} />
    //     );
    // };
    
    
export default PrivateRoute;

