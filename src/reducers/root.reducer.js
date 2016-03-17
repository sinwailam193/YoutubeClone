import { combineReducers } from 'redux';

const videos = () => {
  return {
    type: 'FETCH_VIDEOS',
    payload: 'hi'
  }
}

const RootReducer = combineReducers({
  videos: videos
});

export default RootReducer;
