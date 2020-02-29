import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Staticelements from './Staticelements/staticelements';
import axios from 'axios';


class App extends Component {
  state = {
    selectedFile: null
  }
 
 
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  

  fileUploadHandler = () => {
    axios.post('');
  }

  render() {
    return (
      <div className="App">
        
       <Staticelements></Staticelements>
      <input type='file' onChange={this.fileSelectedHandler} />
      <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default App;
