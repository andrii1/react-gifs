import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  //state = {  }
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }
  render() {
    return (
          <div className="search">
            <input type="text" name="search" onChange={this.handleUpdate} />
          </div>
          );
  }
}

export default Search;
