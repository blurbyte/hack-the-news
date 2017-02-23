import initialState from './initialState';
import * as types from '../actions/actionTypes';

const commentsReducer = (state = initialState.comments, action) => {
  switch(action.type) {
    case types.POPULATE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default commentsReducer;
