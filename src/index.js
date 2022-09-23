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
          <p>This is a Mobile app where :<br/>
                1.) Salesforce acts as Backend.<br/>
                2.) Node.js as middleware and<br/>
                3.) React as front end.<br/>
                factoids web url for this app<br/>
                is : https://astounding-peony-600787.netlify.app/<br/>
                and also if you have installed<br/>
                the .apk file then you will see<br/>
                the app version.<br/>
          </p>
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
