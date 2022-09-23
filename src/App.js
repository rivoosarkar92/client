import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import logo from './drib_blink_bot.gif';
import './App.css';
import {Button } from '@salesforce/design-system-react';

//import {GlobalNavigationBar, GlobalNavigationBarRegion,GlobalNavigationBarLink}  from '@salesforce/design-system-react/';
class App extends Component{
  dataval;
  dofunct=()=>{
    var storedCookie=new Cookies();
    if(typeof storedCookie.get('res')=='undefined'){
    fetch('https://first-react-server-rs.herokuapp.com/get-user-data')
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
          var cookies=new Cookies();
          cookies.set('res', data['res']['Id'], { path: '/' });
        })
        .catch((err)=>{
          console.log('Error from button : '+err);
        }).finally(()=>{
          var cookiefinally= new Cookies();
          window.confirm('Response from Node.js : '+cookiefinally.get('res'));
        });
      }
      else{
        window.confirm('Response from Node.js : '+storedCookie.get('res'));
      }
  }
  render (){
    fetch('https://first-react-server-rs.herokuapp.com/my-custom-domain')
      .then((res)=>{
        return res.json();
      })
        .then((data)=>{
          var cookies=new Cookies();
          cookies.set('u-val', data['data']['o']['id'], { path: '/' });
        }).catch((error)=>{
          console.log(error);
        }).finally(()=>{
        });
        var cookien=new Cookies();
        //alert(cookien.get('u-val'));
        this.dataval=cookien.get('u-val');
    return(
          <div className="App slds-card">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="custom-para">{(!this.dataval) ? "Only changed in src" : this.dataval}</p>
          <Button onClick={this.dofunct} className="App-button" label="Go!" variant="outline-brand"/>
        </header>
    </div>
    );
}
}

export default App;
