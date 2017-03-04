import { fetchTopStoriesIds, fetchStoryWithComments, fetchItemsFromServer, topStoriesIdsFromState } from '../fetchSagas';
import { call, put, take, select } from 'redux-saga/effects';

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

describe('fetchStoryWithComments saga', () => {
  const saga = fetchStoryWithComments();
  let output = null;

  it('should wait for REQUEST_TOP_STORIES_IDS_SUCCESS', function (done) {
    output = saga.next().value;
    let expected = take('REQUEST_TOP_STORIES_IDS_SUCCESS');
    done();

    expect(output).toEqual(expected);
  });

  it('should select top stories ids from the store', () => {
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

  it('should put REQUEST_STORY_WITH_COMMENTS_SUCCESS', function (done) {
    output = saga.next(fetchedStory).value;
    let expected = put({ type: 'REQUEST_STORY_WITH_COMMENTS_SUCCESS', fetchedStory });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });
});

describe('separateStory saga', () => {
  const saga = fetchStoryWithComments();
  let output = null;

  it('should wait for REQUEST_STORY_WITH_COMMENTS_SUCCESS', function (done) {
    output = saga.next().value;
    let expected = take('REQUEST_STORY_WITH_COMMENTS_SUCCESS');
    done();

    expect(output).toEqual(expected);
  });

  it('should put POPULATE_STORY', function (done) {

    output = saga.next(fetchedStory).value;
    let expected = put({ type: 'REQUEST_TOP_STORIES_IDS_SUCCESS', fetchedStory });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });
});

describe('separateComments saga', () => {
  const saga = fetchStoryWithComments();
  let output = null;

  it('should wait for REQUEST_STORY_WITH_COMMENTS_SUCCESS', function (done) {
    output = saga.next().value;
    let expected = take('REQUEST_STORY_WITH_COMMENTS_SUCCESS');
    done();

    expect(output).toEqual(expected);
  });

  it('should put POPULATE_COMMENTS', function (done) {

    output = saga.next(fetchedStory).value;
    let expected = put({ type: 'POPULATE_COMMENTS', fetchedStory });
    const finished = saga.next().done;
    done();

    expect(finished).toEqual(true);
    expect(output).toEqual(expected);
  });
});
