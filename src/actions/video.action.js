import YTSearch from 'youtube-api-search';
import axios from 'axios';

import API_KEY from '../../config.json';
const {KEY} = API_KEY;

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

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
  }
}
