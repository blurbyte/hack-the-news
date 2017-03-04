//Root reducer setup
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import story from './storyReducer';
import comments from './commentsReducer';
import topStoriesIds from './topStoriesIdsReducer';

const rootReducer = combineReducers({ story, comments, topStoriesIds, routing: routerReducer });

export default rootReducer;
