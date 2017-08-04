import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

// import App from './App';
import './index.css';
import CheeseList from './components/cheese-list';
import store from './store'

console.log()
ReactDOM.render(
  <Provider store={store}>
    {/* <App />*/}
    <CheeseList/>
  </Provider>,
  document.getElementById('root')
);
