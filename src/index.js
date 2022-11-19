import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './styles/components/index.scss';
import './styles/sass/responsive.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


