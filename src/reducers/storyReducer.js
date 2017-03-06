import initialState from './initialState';
import * as types from '../actions/actionTypes';

const storyReducer = (state = initialState.story, action) => {
  switch (action.type) {
    case types.REQUEST_STORY_SUCCESS:
      return action.story;
    case types.CLEAR_STORY:
      return initialState.story;
    default:
      return state;
  }
};

export default storyReducer;
