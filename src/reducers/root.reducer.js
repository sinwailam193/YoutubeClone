import { combineReducers } from 'redux';

import VideosReducer from './videos.reducer';

const RootReducer = combineReducers({
  videos: VideosReducer
});

export default RootReducer;
