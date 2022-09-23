import React from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import {Button } from '@salesforce/design-system-react';

//import {GlobalNavigationBar, GlobalNavigationBarRegion,GlobalNavigationBarLink}  from '@salesforce/design-system-react/';
function App() {
  const [dataval, setData] = React.useState(null);
  React.useEffect(()=>{
    fetch('https://first-react-server-rs.herokuapp.com/my-custom-domain')
      .then((res)=>{
        return res.json();
      })
        .then((data)=>{
          var cookies=new Cookies();
          cookies.set('u-val', data['data']['o']['id'], { path: '/' });
          setData(cookies.get('u-val'));
        }).catch((error)=>{
          console.log(error);
        });
      },[]);
  return (
    <div className="App slds-card">
      <header className="App-header">
      <link rel="stylesheet" type="text/css" href="./styles/salesforce-lightning-design-system.min.css" />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-para">{(!dataval) ? "Only changed in src" : dataval}</p>
        <Button className="slds-button slds-button_brand" label="Go!" variant="outline-brand"/>
      </header>
    </div>
  );
}

export default App;
