import React, { Component } from 'react';
import SourceDisplay from './SourceDisplay.js';
import InputDisplay from './InputDisplay.js';
import Timer from './Timer.js';
import Result from './Result.js'

class App extends Component {

  state = {
    input: "",
    textEntered: false
  }

  reset = (e) => {
    this.setState({ input: "" });
    // also needs to reset timer
    // return focus to input
  }

  handleInput = (e) => {
    const input = e.target.value;
    const textEntered = input !== '';

    this.setState({ input, textEntered });
    // this.checkForWin();
    // this.updateStatusClass();
  }

  render() {
    return (
      <div className="app">
        <h1 className="title has-text-centered">Speed Test</h1>
        <SourceDisplay/>
        <InputDisplay reset={this.reset} 
                      handleInput={this.handleInput}
                      input={this.state.input}/>
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <Timer textEntered={this.state.textEntered}/>
            </div>
            <div className="column is-6">
              <Result/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
