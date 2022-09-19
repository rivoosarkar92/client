import React from 'react';
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
          console.log('@@==> : '+JSON.stringify(data['data']['o']['id']));
          setData(data['data']['o']['id']);
        }).catch((error)=>{
          console.log(error);
        });
      },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-para">{(!dataval) ? "Loading..." : dataval}</p>
      </header>
    </div>
  );
}

export default App;
