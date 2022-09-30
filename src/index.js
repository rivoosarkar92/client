import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Eello(props){
  //console.log('@@@==> PROPS : '+JSON.stringify(props));
  return (
        <div>
          <h1>Hi</h1>
          <p>This is a Mobile app where :<br/>
                1.) Salesforce acts as Backend.<br/>
                2.) Node.js as middleware.<br/>
                3.) React as front end.<br/>
                factoids web url for this app is : <a href="https://astounding-peony-600787.netlify.app/" target="_blank" rel="noopener noreferrer">here</a><br/>
                and also if you have installed<br/>
                the .apk file then you will see<br/>
                the app version.<br/>
          </p>
        </div>
    );
}
function Hi(){
  return(
    <html>
<head>
  <title>A static website</title>
  <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  <script>
  netlifyIdentity.on('init', function(){
    Open()
  });
  </script>
</head>
<body>
  <div data-netlify-identity-menu></div>
  <div data-netlify-identity-button>Login with Netlify Identity</div>
  <button>Open</button>
</body>
</html>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <center>
      <Eello/>
      <Hi/>
        <App />
      </center>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
