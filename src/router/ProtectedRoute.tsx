
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authState } = useAuth();
  const location = useLocation();

  if (!authState.isLogin) {
    return <Navigate to="/landing" state={{ from: location }} replace />;
  }

  return children;
};

