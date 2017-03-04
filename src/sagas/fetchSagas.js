import * as types from '../actions/actionTypes';
import { call, put, fork, take, select, takeLatest } from 'redux-saga/effects';

import { requestStoryWithCommentsSuccess, requestTopStoriesIdsSuccess, requestFail } from '../actions/fetchActions';
import { populateStory } from '../actions/storyActions';
import { populateComments } from '../actions/commentsActions';

// json normalize utility functions
import normalizeStory from '../utilities/normalize/normalizeStory';
import normalizeComments from '../utilities/normalize/normalizeComments';

// takes random value from list
import randomListValue from '../utilities/randomListValue';

const STORY_WITH_COMMENTS_ENDPOINT = 'https://node-hnapi.herokuapp.com/item/';
const TOP_STORIES_IDS_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json';

// general purpose fetch function
export function fetchItemsFromServer(apiEndpoint, id = '') {
  return fetch(`${apiEndpoint}${id}`)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    });
}

// SAGA FLOW:
// 1. Fetch a list of top stories from server
// 2. Pick one random story id from a list
// 3. Fetch story from server
// 4. Populate store with story and comments

// TODO
// Put fetched ids in store
// Add next random story functionality

// fetch list of top stories ids
export function* fetchTopStoriesIds() {
  try {
    const topStoriesIds = yield call(fetchItemsFromServer, TOP_STORIES_IDS_ENDPOINT);
    yield put(requestTopStoriesIdsSuccess(topStoriesIds));
  }
  catch (err) {
    yield put(requestFail(err.message));
  }
}

export const topStoriesIdsFromState = (state) => state.topStoriesIds;

// fetching stories
export function* fetchStoryWithComments() {
  try {
    // wait for topStories Ids to be fetched from server
    yield take(types.REQUEST_TOP_STORIES_IDS_SUCCESS);
    // get topStoriesIds from redux store
    const ids = yield select(topStoriesIdsFromState);
    // fetch items from server based on id randomply picked from a list
    const data = yield call(fetchItemsFromServer, STORY_WITH_COMMENTS_ENDPOINT, randomListValue(ids));
    yield put(requestStoryWithCommentsSuccess(data));
  }
  catch (err) {
    yield put(requestFail(err.message));
  }
}

// populating story
export function* separateStory() {
  const {data} = yield take(types.REQUEST_STORY_WITH_COMMENTS_SUCCESS);
  yield put(populateStory(normalizeStory(data)));
}

// populating comments
export function* separateComments() {
  const {data} = yield take(types.REQUEST_STORY_WITH_COMMENTS_SUCCESS);
  yield put(populateComments(normalizeComments(data)));
}

export default function* fetchSagas() {
  yield [
    takeLatest(types.REQUEST_TOP_STORIES_IDS, fetchTopStoriesIds),
    fork(fetchStoryWithComments),
    fork(separateStory),
    fork(separateComments)
  ];
}
