import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Auth0Provider
      domain="dev-5vyznydl.us.auth0.com"
      clientId="zjdgtnQIhKnNygR8WwINXBbEXkSM7Tsz"
      redirectUri={window.location.origin}
      audience="https://dev-5vyznydl.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
      </Auth0Provider>
    </BrowserRouter>
 
</React.StrictMode>
);

