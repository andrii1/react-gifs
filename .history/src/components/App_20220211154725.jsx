import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  //state = {  }
  render() {
    return (<div className="app">

        <div className="left">
          <div className="left-container">
            <div className="search">
              <input type="text" name="search" />
            </div>
            <div className="show">
                <div className="show-gif">show</div>
            </div>
          </div>
        </div>
        <div className="right">2</div>

    </div>);
  }
}

export default App;
