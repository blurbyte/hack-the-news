import * as actions from '../../actions/storyActions';
import storyReducer from '../storyReducer';

import { storeStory } from '../../utilities/testHelpers';

// reducer integration test
describe('comments reducer', () => {
  it('should populate store when data got fetched', () => {

    // arrange
    const stateBefore = {};
    //also got passed to action creator
    const stateAfter = storeStory;

    // act
    const action = actions.requestStorySuccess(stateAfter);

    Object.freeze(stateBefore);
    Object.freeze(action);

    // assert
    expect(storyReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
