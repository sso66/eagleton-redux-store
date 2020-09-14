// File: index.jsx
// Date: 9/9/2020
// Note: Main entry point
//................................................................................
import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root';
import logMiddleware from './middleware/logMiddleware';

console.log('Mounting index.jsx...\n');

// ___ create a Redux store ___
let store = createStore(reducer, applyMiddleware(logMiddleware));

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
