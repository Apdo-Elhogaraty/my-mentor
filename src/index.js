import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MentorProvider } from "./ContextAPI/Store"
import "bootstrap/dist/css/bootstrap.min.css";
=======
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MentorProvider } from "./ContextAPI/Store"
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> f544ea2 (ss)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MentorProvider>
        <App />
      </MentorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

