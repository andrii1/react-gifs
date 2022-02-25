import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif'

const gifs1 = [
  { id: "S2wyeivEIBLPIFzM74",
    id: "s4e2-maUp8O4jFSL28Aaiyb"}
  ]
class Sidebar extends Component {
  //state = {  }
  render() {
    return (
      <div>
      {gifs1.map(gif => {
        return <Gif id={gif.id} key={gif.id} />

      })}
      </div>
    )


  }
}

export default Sidebar;
