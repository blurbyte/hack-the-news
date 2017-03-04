import * as actions from '../../actions/fetchActions';
import topStoriesIdsReducer from '../topStoriesIdsReducer';

import { topStoriesIds } from '../../utilities/testHelpers';

// reducer integration test
describe('topStoriesIds reducer', () => {
  it('should populate store with fetched stories ids', () => {

    // arrange
    const stateBefore = [];
    //also got passed to action creator
    const stateAfter = topStoriesIds;

    // act
    const action = actions.requestTopStoriesIdsSuccess(stateAfter);

    Object.freeze(stateBefore);
    Object.freeze(action);

    // assert
    expect(topStoriesIdsReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
