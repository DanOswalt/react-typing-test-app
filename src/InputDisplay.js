import React, { Component } from 'react';

class InputDisplay extends Component {
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
                     className={"textarea is-medium " + this.props.statusClass }
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
