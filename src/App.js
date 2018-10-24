import React, { Component } from 'react';
import SourceDisplay from './SourceDisplay.js';
import InputDisplay from './InputDisplay.js';
import Timer from './Timer.js';
import Result from './Result.js'
import axios from 'axios';

class App extends Component {

  state = {
    input: "",
    textEntered: false,
    quote: "",
    numWords: 0,
    finished: false,
    finalTime: null,
    wpm: 0,
    isCorrectSoFar: true,
    statusClass: "",
    successClass: ""
  }

  updateStatusClass = () => {
    let statusClass = "is-white";

    if (this.state.textEntered && this.state.isCorrectSoFar) {
      statusClass = "is-primary";
    } else if (this.state.textEntered && !this.state.isCorrectSoFar) {
      statusClass = "is-danger";
    }

    this.setState({ statusClass });
  }

  getQuote = () => {
    axios.get(`http://www.randomtext.me/api/gibberish/p-1/30-60`)
      .then(res => {
        const content = res.data.text_out;
        let htmlRemovedContent = content.replace("<p>", "");
        htmlRemovedContent = htmlRemovedContent.replace("</p>", "").trim();
        this.setState({ quote: htmlRemovedContent });
        this.calcNumWords();
        this.reset();
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getQuote();
  }

  getFinalTime = (finalTime) => {
    const wpm = Number.parseFloat((60 / finalTime) * this.state.numWords).toFixed(1);
    this.setState({wpm, finalTime});
  }

  calcNumWords = () => {
    const numWords = this.state.quote.trim().split(/\s+/).length;
    this.setState({ numWords });
  }

  reset = (e) => {
    this.setState({ 
      input: "", 
      textEntered: false,
      finished: false,
      finalTime: null,
      wpm: 0,
      statusClass: ""
    });
    // return focus to input
  }

  handleInput = (e) => {
    const input = e.target.value;
    const textEntered = input !== '';
    let finished = false;

    if (this.state.quote === input) {
      finished = true;
    }

    this.isCorrectSoFar();
    this.setState({ input, textEntered, finished });
    this.updateStatusClass()
  }

  isCorrectSoFar = () => {
    const isCorrectSoFar = this.state.quote.includes(this.state.input);
    console.log(isCorrectSoFar)
    this.setState({isCorrectSoFar})
  }

  render() {
    return (
      <div className="app">
        <h1 className="title has-text-centered">Speed Test</h1>
        <SourceDisplay quote={this.state.quote}
                       getQuote={this.getQuote}/>
        <InputDisplay reset={this.reset} 
                      handleInput={this.handleInput}
                      input={this.state.input}
                      statusClass={this.state.statusClass}
                      disabled={this.state.finished}/>
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <Timer textEntered={this.state.textEntered} 
                     finished={this.state.finished}
                     getFinalTime={this.getFinalTime}/>
            </div>
            <div className="column is-6">
              <Result wpm={this.state.wpm}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
