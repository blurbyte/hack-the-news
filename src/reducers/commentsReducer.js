import initialState from './initialState';
import * as types from '../actions/actionTypes';

const commentsReducer = (state = initialState.comments, action) => {
  switch(action.type) {
    case types.POPULATE_COMMENTS:
      return action.comments;
    case types.CLEAR_COMMENTS:
      return {};
    default:
      return state;
  }
};

export default commentsReducer;
