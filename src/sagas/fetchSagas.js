/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
import * as types from '../actions/actionTypes';
import { call, put, fork, take, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { requestTopStoriesIdsSuccess, requestFail } from '../actions/fetchActions';
import { requestStorySuccess, clearStory } from '../actions/storyActions';
import { requestCommentsSuccess, clearComments } from '../actions/commentsActions';

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
// 1. Fetch a list of top stories from server and put it into store
// 2. Pick one random story id from the store
// 3. Fetch story from server
// 4. Populate store with story and comments

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

// fetching random stories
export function* fetchRandomStoryWithComments() {
  try {
    // get topStoriesIds from redux store
    const ids = yield select(topStoriesIdsFromState);
    // fetch items from server based on id randomply picked from a list
    const data = yield call(fetchItemsFromServer, STORY_WITH_COMMENTS_ENDPOINT, randomListValue(ids));
    // populates story and comments
    yield [
      put(requestStorySuccess(normalizeStory(data))),
      put(requestCommentsSuccess(normalizeComments(data)))
    ];
  }
  catch (err) {
    yield put(requestFail(err.message));
  }
}

// fetching first random story with comments on app startup
// after top stories got fetched
export function* fetchStoryOnStarup() {
  yield take(types.REQUEST_TOP_STORIES_IDS_SUCCESS);
  yield call(fetchRandomStoryWithComments);
}

// fetching random story after button got pressed
export function* fetchNextRandomStory() {
  while (true) {
    yield take(types.REQUEST_STORY_WITH_COMMENTS);

    yield [
      put(clearStory()),
      put(clearComments())
    ];

    yield call(delay, 600);

    yield call(fetchRandomStoryWithComments);
  }
}

export default function* fetchSagas() {
  yield [
    takeLatest(types.REQUEST_TOP_STORIES_IDS, fetchTopStoriesIds),
    fork(fetchStoryOnStarup),
    fork(fetchNextRandomStory)
  ];
}
