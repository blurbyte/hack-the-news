import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Story extends React.Component {
  render() {
    return (
      <h1>Hack the News</h1>
    );
  }
}

Story.propTypes = {
};

const mapStateToProps = (state) => (
  {
    state
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    dispatch
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Story);
