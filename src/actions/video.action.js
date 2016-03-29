import axios from 'axios';

import API_KEY from '../../config.json';
const KEY = process.env.KEY || API_KEY.KEY;

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function fetchVideos(term) {
  var params = {
    part: 'snippet',
    key: KEY,
    q: term,
    type: 'video'
  };
  const request = axios.get(`https://www.googleapis.com/youtube/v3/search`, {params});
  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}

export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
}
