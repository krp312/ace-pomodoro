import React, { Component } from 'react';
import Header from './components/header';
import Container from './components/container';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container/>
      </div>
    );
  }
}

export default App;
