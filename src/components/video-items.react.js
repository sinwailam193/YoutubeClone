import React, { Component } from 'react';

export default class VideoItems extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {videoSelect, video} = this.props;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li onClick={() => videoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}
