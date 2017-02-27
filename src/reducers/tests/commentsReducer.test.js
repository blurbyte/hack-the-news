import * as actions from '../../actions/commentsActions';
import commentsReducer from '../commentsReducer';

import { storeComments } from '../../utilities/testHelpers';

// reducer integration test
describe('comments reducer', () => {
  it('should populate store when data got fetched', () => {

    // arrange
    const stateBefore = {};
    //also got passed to action creator
    const stateAfter = storeComments;

    // act
    const action = actions.populateComments(stateAfter);

    Object.freeze(stateBefore);
    Object.freeze(action);

    // assert
    expect(commentsReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
