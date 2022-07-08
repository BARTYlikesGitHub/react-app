import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Removing `<React.StrictMode>` allows to localStorage to be saved to: 
  // If anyone is having an issue with the useEffect() function to reload the todo list on refresh,
  // it may be because your App is rendering twice.  This may be because React.
  // StrictMode is being used during development.  
  // Go into index.js and remove the <React.StrictMode> wrapper. - Matt P (https://www.youtube.com/watch?v=hQAHSlTtcmY)
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
);
