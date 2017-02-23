import * as types from '../actions/actionTypes';
import { call, put, fork, take } from 'redux-saga/effects';

import { requestStoryWithCommentsSuccess, requestStoryWithComments, requestFail } from '../actions/fetchActions';
import { populateStory } from '../actions/storyActions';
import { populateComments } from '../actions/commentsActions';

// json normalize utility functions
import normalizeStory from '../utilities/normalize/normalizeStory';
import normalizeComments from '../utilities/normalize/normalizeComments';

const API_PATH = 'https://node-hnapi.herokuapp.com/item/';

// general purpose fetch function
export function fetchItemsFromServer(id) {
  return fetch(`${API_PATH}${id}`)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    });
}

// fetching stories
export function* fetchStoryWithComments() {
  try {
    // get storyId
    const {storyId} = yield take(types.REQUEST_STORY_WITH_COMMENTS);
    yield put(requestStoryWithComments(storyId));
    // fetch items from server based on passedId
    const data = yield call(fetchItemsFromServer, storyId);
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
    fork(fetchStoryWithComments),
    fork(separateStory),
    fork(separateComments)
  ];
}
