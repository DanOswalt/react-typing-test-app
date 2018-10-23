import React, { Component } from 'react';

class Timer extends Component {
  state = {
    msElapsed: 0,
    displayTime: "0.0",
    timerId: null
  }

  componentDidUpdate (prevProps) {
    if (prevProps.textEntered !== this.props.textEntered) {
      if (this.props.textEntered) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  startTimer = () => {
    let msElapsed = this.state.msElapsed
    const timerId = setInterval(() => {
      msElapsed += 0.1;
      const displayTime = Number.parseFloat(msElapsed).toFixed(1)
      this.setState({msElapsed, displayTime, timerId});
    }, 100);
  }  

  stopTimer = () => {
    clearInterval(this.state.timerId);
    const state = {
      msElapsed: 0,
      displayTime: "0.0",
      timerId: null
    }
    this.setState({...state})
  }

  render() {
    return (
      <div className="timer has-text-centered">
        <span className="timer-display is-size-1">
          { this.state.displayTime } seconds
        </span>
      </div>
    )
  }
}

export default Timer;