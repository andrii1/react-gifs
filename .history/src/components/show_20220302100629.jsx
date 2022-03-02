import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Show extends Component {
  //state = {  }
  render() {
    return (
      <div className="show">
        <div className="show-container">
          <div className="show-gif"> <img src={src} className="gif" onClick={this.handleClick} /></div>
        </div>
      </div>
    );
  }
}

export default Show;
