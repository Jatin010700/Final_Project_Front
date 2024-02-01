// PrivateRoute.js
import React from 'react';
import { useAuth } from './authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, roles, ...rest }) => {
  const { token } = useAuth();
  
  if (!token) {
    return <Navigate to="/unauthorized" />;
  }

  // if (roles && roles.indexOf(token.role) === -1) {
  //   // Redirect to unauthorized page if user doesn't have required role
  //   return <Navigate to="/unauthorized" />;
  // }

  // Render the component if authenticated and has the required role
  return <Element {...rest}/>
};

export default PrivateRoute;
