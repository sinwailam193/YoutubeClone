import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions/video.action';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  _handleClick = () => {
    this.props.fetchVideos('pokemon');
  };  

  render() {
    return (
      <button className="btn btn-danger" onClick={this._handleClick}>Click</button>
    );  
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, {fetchVideos})(Main);
