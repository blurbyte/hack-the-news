import React, { PropTypes } from 'react';

import Label from './Label';

const CommentsNumber = ({children}) => {
  return (
    <Label>{children}</Label>
  );
};

CommentsNumber.propTypes = {
  children: PropTypes.node
};

export default CommentsNumber;
