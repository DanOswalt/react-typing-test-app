import React, { Component } from 'react';

class InputDisplay extends Component {
  state = {
    isCorrectSoFar: true,
    statusClass: "is-white",
    isExactMatch: false
  }

  updateStatusClass = () => {
    let statusClass = "is-white";

    if (this.state.isExactMatch) {
      statusClass = "is-success disabled"
    } else if (this.state.textEntered && this.state.isCorrectSoFar) {
      statusClass = "is-primary";
    } else if (this.state.textEntered && !this.state.isCorrectSoFar) {
      statusClass = "is-danger";
    }

    this.setState({ statusClass });
  }

  checkForWin = (e) => {
    const isExactMatch = this.state.quote === this.state.input;
    this.setState({ isExactMatch });
  }

  render() {
    return (
      <div className="inputDisplay container">
        <div className="box">
          <div className="field">
            <div className="control">
              <button onClick= { this.props.reset } className="button">Reset</button>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input onChange={ this.props.handleInput } 
                     className={"textarea is-medium " + this.state.statusClass }
                     type="textarea"
                     autoFocus
                     placeholder="Clock starts when you type"
                     value={this.props.input}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InputDisplay;
