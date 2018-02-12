import React, { Component } from 'react';
import './App.css';
import Body from'./components/Body'
import InputField from './components/InputField'


class App extends Component {
  render() {
    return (
      <div className="App">
       <InputField/>
      </div>
    );
  }
}

export default App;
