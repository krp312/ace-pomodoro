import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import CheeseList from './components/cheese-list';

console.log()
ReactDOM.render(
  // <App />,
  <CheeseList cheeses={["Bath Blue",
    "Barkham Blue",
    "Buxton Blue"]}/>,
  document.getElementById('root')
);
