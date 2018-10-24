import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result has-text-centered">
        <span className="result-display is-size-1">
          { this.props.wpm } wpm
        </span>
      </div>
    )
  }
}

export default Result;