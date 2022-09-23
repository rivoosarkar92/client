import React from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import {Button } from '@salesforce/design-system-react';
import {GlobalNavigationBar, GlobalNavigationBarRegion,GlobalNavigationBarLink, Modal}  from '@salesforce/design-system-react/';
const leadSourceOptions = [
	{ id: 1, label: 'Third Party Program', value: 'A0' },
	{ id: 2, label: 'Cold Call', value: 'B0' },
	{ id: 3, label: 'LinkedIn', value: 'C0' },
	{ id: 4, label: 'Direct Mail', value: 'D0' },
	{ id: 5, label: 'Other', value: 'E0' },
];

const opportunityTypeOptions = [
	{ id: 1, label: 'Add on Business', value: 'A0' },
	{ id: 2, label: 'Courtesy', value: 'B0' },
	{ id: 3, label: 'New Business', value: 'C0' },
	{ id: 4, label: 'Renewal', value: 'D0' },
	{ id: 5, label: 'Upgrade', value: 'E0' },
];
function App() {
  const [dataval, setData] = React.useState(null);
  const state = {
		isOpen: false,
		leadSourceSelection: [leadSourceOptions[0]],
		opportunityTypeSelection: [opportunityTypeOptions[0]],
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
