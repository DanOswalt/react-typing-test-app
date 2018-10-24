import React, { Component } from 'react';

class Result extends Component {
  render() {
    const {wpm} = this.props;
    return (
      <div className="result has-text-centered">
        <span className={`result-display is-size-1 ${wpm ? "boing" : ""}`}>
          {wpm} wpm
        </span>
      </div>
    )
  }
}

export default Result;