import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      term: '' 
    };
  }

  _handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  _handleClick = (event) => {
    event.preventDefault();
    this.props.videoSearch(this.state.term);
    this.setState({
      term: ''
    });
  };

  render() {
    return (
      <form className="search-bar">
        <input value={this.state.term} onChange={this._handleChange} />
        <button className="btn btn-primary" onClick={this._handleClick}>Search</button>
      </form>
    );
  }
}

export default SearchBar;
