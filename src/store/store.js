// File: store/store.jsx
// Date: 9/9/2020
// Note: Redux Store: Predictable State Management Container
//................................................................................
import { createStore } from 'redux';
console.log('Mounting store.js...\n');

const reducer = (state, action) => state;
const store = createStore(reducer);

window.store = store;

export default store;