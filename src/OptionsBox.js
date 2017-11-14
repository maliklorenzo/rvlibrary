import React, { Component } from 'react';

class OptionsBox extends Component {
  constructor() {
    super();
    this.handleResponseDisplay = this.handleResponseDisplay.bind(this);
    this.handleClearResponse = this.handleClearResponse.bind(this);

    this.state = {
      showResponse: false,
      response: ''
    };
  }

  handleResponseDisplay(e, response) {
    e.preventDefault();
    this.setState({
      showResponse: true,
      response
    });
    this.handleClearResponse();
  }

  handleClearResponse() {
    const setState = () => this.setState({
        showResponse: false,
        response: ''
      });

    setTimeout(setState, 2000);
  }

  render() {
    return (
        <div className="optionsBox">
          <a href="/" className="button" onClick={(e) => this.handleResponseDisplay(e,"Functionality coming soon.")}><i className="fa fa-plus" aria-hidden="true"></i>Reserve</a>
          <a href="/" className="button secondary"onClick={(e) => this.handleResponseDisplay(e,"Functionality coming soon.")}>Review</a>
          <p className="responseBox">{this.state.showResponse ? this.state.response : ''}</p>
        </div>
    );
  }
}


export default OptionsBox;
