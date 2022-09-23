import React from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import {Button } from '@salesforce/design-system-react';
import {GlobalNavigationBar, GlobalNavigationBarRegion,GlobalNavigationBarLink}  from '@salesforce/design-system-react/';
function App() {
  const [dataval, setData] = React.useState(null);
  const state = {
		isOpen: false
	};
  console.log('@@@@@@==> : state '+JSON.stringify(state));
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
    <div className="App">
      <header className="App-header">
        <GlobalNavigationBar>
          <GlobalNavigationBarRegion region="primary">
            <GlobalNavigationBarLink active label="Home" id="home-link" />
            <GlobalNavigationBarLink label="Menu Item 2" />
						<GlobalNavigationBarLink label="Menu Item 3" />
						<GlobalNavigationBarLink label="Menu Item 4" />
          </GlobalNavigationBarRegion>
        </GlobalNavigationBar>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-para">{(!dataval) ? "Only changed in src" : dataval}</p>
        <Button label="Go!" variant="outline-brand"/>
      </header>
    </div>
  );
}

export default App;
