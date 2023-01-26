import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles/global.scss';
import Router from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
