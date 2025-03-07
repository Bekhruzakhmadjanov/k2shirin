import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new `react-dom/client`
import App from './App';
import './index.css'; // If you have a global CSS file
import './utils/i18n/index.js'; // Import the i18n configuration

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
