import normalizeStory from '../normalizeStory';
import normalizeComments from '../normalizeComments';
import {fetchedStory, storeStory, fetchedComments, storeComments} from '../../testHelpers';

describe('normalizeStory', () => {
  it('should transform fetched story', () => {
    expect(normalizeStory(fetchedStory)).toEqual(storeStory);
  });
});

describe('normalizeComments', () => {
  it('should transform and flatten fetched comments', () => {
    expect(normalizeComments(fetchedComments)).toEqual(storeComments);
  });
});

