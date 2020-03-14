import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Staticelements from './Staticelements/staticelements';
import Dropzone from './Dropzone/Dropzone';


class App extends Component { 
  render() {
    return (
      <div className="App">
        
       <Staticelements/>
       <Dropzone />
      </div>
    );
  }
}

export default App;
