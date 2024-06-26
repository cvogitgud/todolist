import React from 'react';
import ReactDOM from 'react-dom/client';

import './Styles/index.css';
import './Styles/navbar.css';
import './Styles/list_view.css';
import './Styles/addlist.css';
import './Styles/taskcollection.css';
import './Styles/list_collection.css';

import App from './Components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
