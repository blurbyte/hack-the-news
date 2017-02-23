import initialState from './initialState';
import * as types from '../actions/actionTypes';

const storyReducer = (state = initialState.story, action) => {
  switch (action.type) {
    case types.POPULATE_STORY:
      return action.story;
    default:
      return state;
  }
};

export default storyReducer;
