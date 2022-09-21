import React from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';

function App() {
  const [dataval, setData] = React.useState(null);
  React.useEffect(()=>{
    fetch('https://first-react-server-rs.herokuapp.com/my-custom-domain')
      .then((res)=>{
        return res.json();
      })
        .then((data)=>{
          var cookies=new Cookies();
          console.log('@@==> : '+JSON.stringify(data['data']['o']['id']));
          setData(data['data']['o']['id']);
          cookies.set('myCat', data['data']['o']['id'], { path: '/' });
          console.log('@@@@COOKIES VALUE====>'+cookies.get('myCat'));
        }).catch((error)=>{
          console.log(error);
        });
      },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-para">{(!dataval) ? "Only changed in src" : dataval}</p>
      </header>
    </div>
  );
}

export default App;
