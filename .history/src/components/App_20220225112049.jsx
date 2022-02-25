import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search'
import Show from './Show'
import Sidebar from './Sidebar'

class App extends Component {
  //state = {  }
  render() {
    return (<div className="app">

        <div className="left">
          <div className="left-container">
            <Search />
            <Show />
          </div>
        </div>
        <div className="right"><Sidebar /></div>

    </div>);
  }
}

export default App;
