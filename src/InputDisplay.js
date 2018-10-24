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
              <textarea onChange={ this.props.handleInput } 
                     className={"textarea " + this.props.statusClass }
                     type="textarea"
                     rows="5"
                     autoFocus={true}
                     disabled={this.props.disabled}
                     placeholder="Clock starts when you type"
                     value={this.props.input}>
              </textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InputDisplay;
