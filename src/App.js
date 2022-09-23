import React, {Component} from 'react';
//import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import {Button } from '@salesforce/design-system-react';

//import {GlobalNavigationBar, GlobalNavigationBarRegion,GlobalNavigationBarLink}  from '@salesforce/design-system-react/';
class App extends Component{
  dataval;
  dofunct=()=>{
    alert('clicked me');
  }
  async callmethod(){
    var ret=await fetch('https://first-react-server-rs.herokuapp.com/my-custom-domain')
      return ret;
  }
  render (){
    var pro=this.callmethod();
    console.log('RES : '+JSON.stringify(pro));
    return(
    <div className="App slds-card">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.dataval}
        <p className="custom-para">{(!this.dataval) ? "Only changed in src" : this.dataval}</p>
        <Button onClick={this.dofunct} className="App-button" label="Go!" variant="outline-brand"/>
      </header>
    </div>);
}
}

export default App;
