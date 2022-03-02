import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif'

const gifs1 = [
  { id: "S2wyeivEIBLPIFzM74" },
  { id: "sTczweWUTxLqg"},
  { id: "mVTHTOUsvduNfYRO15" },
  { id: "mVTHTOUsvduNfYRO15" }

  ]
class Sidebar extends Component {
  //state = {  }
  render() {
    return (
      <div className='gif-list'>
      {gifs1.map(gif => {
        return <Gif id={gif.id} key={gif.id} />

      })}
      </div>
    )


  }
}

export default Sidebar;
