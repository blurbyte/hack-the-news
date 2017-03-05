import initialState from './initialState';
import * as types from '../actions/actionTypes';

const storyReducer = (state = initialState.story, action) => {
  switch (action.type) {
    case types.POPULATE_STORY:
      return Object.assign({}, state, action.story);
    case types.CLEAR_STORY:
      return {};
    default:
      return state;
  }
};

export default storyReducer;
