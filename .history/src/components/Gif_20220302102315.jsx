
import React, { Component } from 'react';

class Gif extends Component {

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/180.gif`;
    return (
      <div className="image">
      <img src={src} className="gif"  />
      </div>
    );
  }
}

export default Gif;
