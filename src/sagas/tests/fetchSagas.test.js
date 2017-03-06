import { fetchTopStoriesIds, fetchRandomStoryWithComments, fetchNextRandomStory, fetchItemsFromServer, topStoriesIdsFromState } from '../fetchSagas';
import { call, put, take, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { fetchedStory } from '../../utilities/testHelpers';

describe('fetchTopStoriesIds saga', () => {
  const saga = fetchTopStoriesIds();
  let output = null;

  it('should call fetchItemsFromServer', function (done) {
    output = saga.next().value;
    let expected = call(fetchItemsFromServer);
    done();

    expect(output).toEqual(expected);
  });

  it('should put REQUEST_TOP_STORIES_IDS_SUCCESS', function (done) {
    const topStoriesIds = ['1234', '4567', '25679'];

    output = saga.next(topStoriesIds).value;
    let expected = put({ type: 'REQUEST_TOP_STORIES_IDS_SUCCESS', topStoriesIds });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });
});

describe('fetchRandomStoryWithComments saga', () => {
  const saga = fetchRandomStoryWithComments();
  let output = null;

  it('should select random top story id from the store', () => {
    output = saga.next().value;
    let expected = select(topStoriesIdsFromState);

    expect(output).toEqual(expected);
  });

  it('should call fetchItemsFromServer', function (done) {
    output = saga.next().value;
    let expected = call(fetchItemsFromServer);
    done();

    expect(output).toEqual(expected);
  });

  it('should put REQUEST_STORY_SUCCESS', function (done) {
    output = saga.next(fetchedStory).value;
    let expected = put({ type: 'REQUEST_STORY_SUCCESS', fetchedStory });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });

  it('should put REQUEST_COMMENTS_SUCCESS', function (done) {
    output = saga.next(fetchedStory).value;
    let expected = put({ type: 'REQUEST_COMMENTS_SUCCESS', fetchedStory });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });
});

describe('fetchTopStoriesIds saga', () => {
  const saga = fetchTopStoriesIds();
  let output = null;

  it('should call fetchItemsFromServer', function (done) {
    output = saga.next().value;
    let expected = call(fetchItemsFromServer);
    done();

    expect(output).toEqual(expected);
  });

  it('should put REQUEST_TOP_STORIES_IDS_SUCCESS', function (done) {
    const topStoriesIds = ['1234', '4567', '25679'];

    output = saga.next(topStoriesIds).value;
    let expected = put({ type: 'REQUEST_TOP_STORIES_IDS_SUCCESS', topStoriesIds });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });
});

describe('fetchStoryOnStarup saga', () => {
  const saga = fetchTopStoriesIds();
  let output = null;

  it('should wait for REQUEST_TOP_STORIES_IDS_SUCCESS', function (done) {
    output = saga.next().value;
    let expected = take('REQUEST_TOP_STORIES_IDS_SUCCESS');
    done();

    expect(output).toEqual(expected);
  });

  it('should call fetchRandomStoryWithComments', function (done) {
    output = saga.next().value;
    let expected = call(fetchRandomStoryWithComments);
    done();

    expect(output).toEqual(expected);
  });
});

describe('fetchNextRandomStory saga', () => {
  const saga = fetchNextRandomStory();
  let output = null;

  it('should wait for REQUEST_STORY_WITH_COMMENTS', function (done) {
    output = saga.next().value;
    let expected = take('REQUEST_STORY_WITH_COMMENTS');
    done();

    expect(output).toEqual(expected);
  });

  it('should put CLEAR_STORY', function (done) {
    output = saga.next().value;
    let expected = put({ type: 'CLEAR_STORY' });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });

  it('should put CLEAR_COMMENTS', function (done) {
    output = saga.next().value;
    let expected = put({ type: 'CLEAR_COMMENTS' });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });

  it('should delay fetch by 500ms', function (done) {
    output = saga.next().value;
    let expected = call(delay, 600);
    done();

    expect(output).toEqual(expected);
  });

  it('should call fetchRandomStoryWithComments', function (done) {
    output = saga.next().value;
    let expected = call(fetchRandomStoryWithComments);
    done();

    expect(output).toEqual(expected);
  });
});
