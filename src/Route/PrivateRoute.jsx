// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Assuming isAuthenticated function checks user auth status
const isAuthenticated = () => {
  // This could check if there's a valid token in local storage, or check a global auth state
  return localStorage.getItem("authToken") !== null;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
