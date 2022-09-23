import React from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import { Button } from 'design-system-react/components/button';

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
          //alert('hi'+cookies.get('u-val'));
          setData(cookies.get('u-val'));
          //console.log('@@==> : '+JSON.stringify(data['data']['o']['id']));
          //console.log('@@@@COOKIES VALUE====>'+cookies.get('u-val'));
        }).catch((error)=>{
          console.log(error);
        });
      },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-para">{(!dataval) ? "Only changed in src" : dataval}</p>
        <Button label="Go!" />
      </header>
    </div>
  );
}

export default App;
