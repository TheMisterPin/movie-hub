import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: client_Id, VITE_AUTH0_AUDIENCE: audience } = import.meta.env
const redirectUri = "http://localhost:5173/home"
const onRedirectCallback = "http://localhost:5173/home"
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <Auth0Provider
      domain={domain}
      clientId={client_Id}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience,

        onRedirectCallback: onRedirectCallback
      }}
    >
      <App />
    </Auth0Provider></Router>
  </React.StrictMode>,
)