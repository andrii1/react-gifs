
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {

      this.props.selectGif(this.props.id);
      console.log(this.props.id)

  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <div className="image">
        <img src={src} className="gif" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Gif;
