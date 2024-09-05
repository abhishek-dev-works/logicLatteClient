// src/slices/index.js
import { combineReducers } from 'redux';
import postsReducer from './postSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  // Add other reducers here
});

export default rootReducer;
