import React, { Component } from 'react';
import axios from 'axios';

class SourceDisplay extends Component {
  state = {
    quote: "",
    numWords: 0
  }

  getQuote = () => {
    axios.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20`)
      .then(res => {
        const rand = Math.floor(Math.random() * 20)
        const content = res.data[rand].content;
        let htmlRemovedContent = content.replace("<p>", "");
        htmlRemovedContent = htmlRemovedContent.replace("</p>", "");
        this.setState({ quote: htmlRemovedContent });
        this.calcNumWords();
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getQuote();
  }

  fetchNewQuote = (e) => {
    this.getQuote();
    // reset input field, how to send message from this component to that one?
  }

  calcNumWords = () => {
    const numWords = this.state.quote.trim().split(/\s+/).length;
    this.setState({ numWords })
  }

  render() {
    return (
      <div className="sourceDisplay container">
        <div className="box">
          <div className="field">
            <div className="control">
              <button onClick= { this.fetchNewQuote } className="button">Get Different Text</button>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="textarea is-primary is-medium" type="textarea" readOnly value={ this.state.quote }/>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default SourceDisplay;
