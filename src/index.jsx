// File: index.jsx
// Date: 9/9/2020
// Note: Main entry point
//................................................................................
import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';

import { createStore } from 'redux';
import reducer from './reducers/root';

console.log('Mounting index.jsx...\n');

// ___ create a Redux store ___
let store = createStore(reducer);

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();

// eof
