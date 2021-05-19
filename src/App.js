import React, { Component } from 'react';
import "./App.css";
import LoginControl from './logincontrol';
class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <LoginControl />
        </section>
      </div>
    );
  }
}

export default App;