import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif'

const gifs1 = [
  { id: "S2wyeivEIBLPIFzM74"}
  ]
class Sidebar extends Component {
  //state = {  }
  render() {
    gifs1.map(gif => {
      return <Gif id={gif.id} key={gif.id} />

    })
    return (
      <div>3</div>
    );
  }
}

export default Sidebar;
