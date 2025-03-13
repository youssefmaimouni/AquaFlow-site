import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userId = localStorage.getItem('userId');

  if (!userId) {
    return <Navigate to="/AquaFlow-site/#/login" />;
  }

  return children;
};

export default ProtectedRoute;