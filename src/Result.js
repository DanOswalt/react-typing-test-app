import React, { Component } from 'react';

class Result extends Component {
  state = {
    wpm: 0
  }

  render() {
    return (
      <div className="result has-text-centered">
        <span className="result-display is-size-1">
          { this.state.wpm } wpm
        </span>
      </div>
    )
  }
}

export default Result;