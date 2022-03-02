import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif'

const gifs1 = [
  { id: "S2wyeivEIBLPIFzM74" },
  { id: "sTczweWUTxLqg"},
  { id: "mVTHTOUsvduNfYRO15" },
  { id: "sJWNLTclcvVmw" }

  ]

class Sidebar extends Component {
  //state = {  }
  render() {
    return (
      <div className='gif-list'>
      {console.log(this.props.gifs)}
      </div>
    )


  }
}

export default Sidebar;
