import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Components/ContextAPI/Context';
import './App.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <UserProvider>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </UserProvider>
);


