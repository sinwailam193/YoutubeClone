import React, { Component } from 'react';
import VideoItems from './video-items.react';

export default class VideoList extends Component {

  constructor(props) {
    super(props);
  }

  _videoItems = () => {
    return this.props.videos.map(video => {
      return <VideoItems videoSelect={this.props.videoSelect} key={video.etag} video={video} />;
    });
  };

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this._videoItems()}
      </ul>
    );
  }
}
