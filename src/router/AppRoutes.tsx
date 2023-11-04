import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { LANDING, LOGIN, REGISTER, HOME } from  './routes/routePaths';
import { Landing } from '../Pages/Landing';
import { Home } from '../Pages/Home';
import { LoginForm } from '../components/forms/LoginForm';
import { SignUpForm } from '../components/forms/SignUpForm';

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path={LANDING} element={<Landing />} />
        <Route path={LOGIN} element={<LoginForm />} />
        <Route path={REGISTER} element={<SignUpForm />} />
        <Route
          path={HOME}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to={LANDING} replace />}
        />
      </Routes>
    );
  };
  
  export default AppRoutes;