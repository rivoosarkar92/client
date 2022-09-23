import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import {Button } from '@salesforce/design-system-react';

//import {GlobalNavigationBar, GlobalNavigationBarRegion,GlobalNavigationBarLink}  from '@salesforce/design-system-react/';
class App extends Component{
  dataval;
  dofunct=()=>{
    alert('clicked me');
  }
  render (){
    return(
      fetch('https://first-react-server-rs.herokuapp.com/my-custom-domain').then((res)=>{
        return res.json()
      }).then((data)=>{
          var cookies=new Cookies();
          cookies.set('u-val', data['data']['o']['id'], { path: '/' });
          this.dataval=cookies.get('u-val');
          <div className="App slds-card">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="custom-para">{(!this.dataval) ? "Only changed in src" : this.dataval}</p>
          <Button onClick={this.dofunct} className="App-button" label="Go!" variant="outline-brand"/>
        </header>
    </div>
      }).catch((err)=>{
        console.log('ERROR ==> : '+err);
      })
    );
}
}

export default App;
