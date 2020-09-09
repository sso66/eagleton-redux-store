// File: App.jsx
// Date: 9/9/2020
// Note: Application entry point
import React from 'react';
import './App.sass';
import { voteAngular, voteReact, voteVue } from './actions';

console.log('Mounting App.js...\n');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVue = () => {
    this.store.dispatch(voteVue());
  }

  render() {
    return (
      <div className='App'>
        <div style={{ 'backgroundColor': 'orange' } }>
          <h2>Eagleton Redux Store</h2>
          <h3>What is your favorite front-end development in 2020</h3>
          <h4>Click on the buttons below to vote</h4>
          <hr />
          <div className='votes'>
            <div className='col'>
              <button onClick={this.handleVoteAngular}>Angular</button>
            </div>
            <div className='col'>
              <button onClick={this.handleVoteReact}>React</button>
            </div>
            <div className='col'>
              <button onClick={this.handleVoteVue}>Vue</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
