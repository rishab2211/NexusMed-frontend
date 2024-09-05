
import React from 'react';
import { Navigate } from 'react-router-dom';

// Check if the user is authenticated (this is just a mock; replace it with your real authentication logic)
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

// PrivateRoute component to protect routes
export const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};
