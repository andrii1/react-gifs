import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif'

class Sidebar extends Component {
  //state = {  }
  render() {
    this.props.gifs.map(gif => {
      return <Gif id={gif.id}>

    })
    return (
      <div>3</div>
    );
  }
}

export default Sidebar;
