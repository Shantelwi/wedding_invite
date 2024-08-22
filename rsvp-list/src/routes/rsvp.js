import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    return(
        <Route
            {...rest}
            element= {isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute