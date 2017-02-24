import React, {PropTypes} from 'react';
import styled from 'styled-components';

const StyledUser = styled.p`
  color: #fe6e0d;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  letter-spacing: -0.1rem;
  margin: 0;
  display: block;
  margin-right: 8.2rem;
`;

const User = ({user}) => {
  return (
    <StyledUser>{user}</StyledUser>
  );
};

User.propTypes = {
  user: PropTypes.string
};

export default User;
