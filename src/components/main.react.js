import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchVideos, selectVideo } from '../actions/video.action';
import SearchBar from './search-bar.react';
import VideoDetail from './video-detail.react';
import VideoList from './video-list.react';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchVideos('Pokemon')
      .then(() => {
        this.props.selectVideo(this.props.videos[0]);
      });
  }

  _videoSearch = (term) => {
    this.props.fetchVideos(term);
  };

  _videoSelect = (selected) => {
    this.props.selectVideo(selected);
  };

  render() {

    return (
      <div>
        <SearchBar videoSearch={this._videoSearch} />
        <VideoDetail video={this.props.video} />
        <VideoList  videoSelect={this._videoSelect} videos={this.props.videos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos.videos,
    video: state.videos.video
  }
}

export default connect(mapStateToProps, {fetchVideos, selectVideo})(Main);
