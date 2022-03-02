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
        {this.props.gifs.map(gif => {
          return <Gif id={gif} key={gif} selectGif={props.selectGif} />
        })}
      </div>
    )


  }
}

export default Sidebar;
