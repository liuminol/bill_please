import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PeopleContextProvider } from './context/peopleContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PeopleContextProvider>
      <App/>
    </PeopleContextProvider>
  </React.StrictMode>
);
