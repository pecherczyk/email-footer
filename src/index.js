import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// navigator.clipboard.read().then(
//   function(response) {
//     const a = response[0].getType('text/html')
//     console.log(a)
//     a.then(function(r) {
//       console.log(r)
//     })
//   },
//   function(reason) {
//     console.log(reason)
//   }
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);
