import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button } from '@salesforce/design-system-react';
function Eello(props){
  console.log('@@@==> PROPS : '+props);
  return (
        <div>
          <h1>Hi</h1>
          <pre>This is a Mobile app where :
                1.) Salesforce acts as Backend.
                2.) Node.js as middleware and
                3.) React as front end.
                factoids web url for this app
                is : https://astounding-peony-600787.netlify.app/
                and also if you have installed
                the .apk file then you will see
                the app version
          </pre>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <center>
      <Eello/>
        <App />
        <Button label="Go!" variant="outline-brand"/>
      </center>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
