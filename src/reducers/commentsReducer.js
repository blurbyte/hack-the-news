import initialState from './initialState';
import * as types from '../actions/actionTypes';

const commentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case types.REQUEST_COMMENTS_SUCCESS:
      return action.comments;
    case types.CLEAR_COMMENTS:
      return initialState.comments;
    default:
      return state;
  }
};


export default commentsReducer;
