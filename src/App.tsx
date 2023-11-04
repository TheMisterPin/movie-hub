import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from 'styled-components';
import theme from './styled components/theme';


const App: React.FC = () => {
  return (
    <AuthProvider>
       <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router></ThemeProvider>
    </AuthProvider>
  );
};

export default App;
