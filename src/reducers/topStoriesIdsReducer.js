import initialState from './initialState';
import * as types from '../actions/actionTypes';

const storyReducer = (state = initialState.topStoriesIds, action) => {
  switch (action.type) {
    case types.REQUEST_TOP_STORIES_IDS_SUCCESS:
      return action.ids;
    default:
      return state;
  }
};

export default storyReducer;
