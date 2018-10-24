import React, { Component } from 'react';

class SourceDisplay extends Component {

  render() {
    return (
      <div className="sourceDisplay container">
        <div className="box">
          <div className="field">
            <div className="control">
              <button onClick= { this.props.getQuote } className="button">Get Different Text</button>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="textarea is-primary is-medium" type="textarea" readOnly value={ this.props.quote }/>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default SourceDisplay;
