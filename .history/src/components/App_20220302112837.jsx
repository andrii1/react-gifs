import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';
import Search from './Search'
import Show from './Show'
import Sidebar from './Sidebar'
const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
    this.search = this.search.bind(this);
    //this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({
      q: query,
      rating: 'g',
      limit: 10
    }, function (err, res) {
      const gifs = res.map(giph => giph.id)
      this.setState({
        gifs: gifs
      })
      // Res contains gif data!
    });
  }


  render() {
    return (<div className="app">

        <div className="left">
          <div className="left-container">
          <Search searchFunction={this.search} />
          <Show id={this.state.selectedGifId}  />
          </div>
        </div>
        <div className="right"><Sidebar gifs={this.state.gifs} /></div>

    </div>);
  }
}

export default App;
