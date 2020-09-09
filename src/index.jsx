// File: index.jsx
// Date: 9/9/2020
// Note: Main entry point
import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';

import { createStore } from 'redux';
import reducer from './reducers';
import Results from './components/results'

console.log('Mounting index.js...\n');

// ___ create a Redux store ___
let store = createStore(reducer);

function load() {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
      <hr/>
      <Results store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(load);

load();

// eof
