import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import {ProtectedRoute} from './ProtectedRoute';
import { LANDING, LOGIN, REGISTER, HOME, MOVIEDETAILS, UPLOAD, USER } from  './routes/routePaths';
import { Landing } from '../Pages/Landing';
import { Home } from '../Pages/Home';
import { LoginForm } from '../components/forms/LoginForm';
import { SignUpForm } from '../components/forms/SignUpForm';
import MovieDetails from '../Pages/MovieDetails';

// Presuming you have components for Upload and User pages.
import UploadPage from '../Pages/UploadPage';
import UserProfile from '../Pages/UserProfile';

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path={LANDING} element={
    
            <Landing />
        
        }/>
        <Route path={LOGIN} element={
      
            <LoginForm />
       
        }/>
        <Route path={REGISTER} element={
       
            <SignUpForm />
       
        }/>
        <Route path={HOME} element={
     
            <Home />
      
        }/>
        <Route path={MOVIEDETAILS} element={
         
            <MovieDetails />
        
        }/>
        <Route path={UPLOAD} element={
         
            <UploadPage />
          
        }/>
        <Route path={USER} element={
      
            <UserProfile />
      
        }/>
        <Route path="/" element={<Navigate to={LANDING} />}/>
      </Routes>
    );
};

export default AppRoutes;