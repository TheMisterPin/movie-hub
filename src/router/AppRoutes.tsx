import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LANDING, LOGIN, REGISTER, HOME, MOVIEDETAILS, UPLOAD, USER } from  './routes/routePaths';
import { Landing } from '../views/Landing';
import { Home } from '../views/Home';
import { SignUpForm } from '../components/forms/SignUpForm';
import MovieDetails from '../views/MovieDetails';
import UploadPage from '../views/UploadPage';
import UserProfile from '../views/UserProfile';
import { LoginForm } from '../components/forms/LoginForm';



const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path={LANDING} element={<Landing />}/>
        <Route path={LOGIN} element={<LoginForm />}/>
        <Route path={REGISTER} element={<SignUpForm />}/>
        <Route path={HOME} element={<Home/>}/>
        <Route path={MOVIEDETAILS} element={<MovieDetails />}/>
        <Route path={UPLOAD} element={<UploadPage />}/>
        <Route path={USER} element={<UserProfile />}/>
        <Route path="/" element={<Navigate to={LANDING}/>}/>
      </Routes>
    );
};

export default AppRoutes;