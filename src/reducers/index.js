//Root reducer setup
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import story from './storyReducer';
import comments from './commentsReducer';

const rootReducer = combineReducers({ story, comments, routing: routerReducer });

export default rootReducer;
