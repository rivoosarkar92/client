import React from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import {Button } from '@salesforce/design-system-react';

//import {GlobalNavigationBar, GlobalNavigationBarRegion,GlobalNavigationBarLink}  from '@salesforce/design-system-react/';
const App=()=>{
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
      const dofunct=()=>{
        alert('clicked me');
      }
  return (
    <div className="App slds-card">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-para">{(!dataval) ? "Only changed in src" : dataval}</p>
        <Button onClick={dofunct} className="App-button" label="Go!" variant="outline-brand"/>
      </header>
    </div>
  );
}

export default App;
