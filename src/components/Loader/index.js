import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.6rem;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Loading>Loading...</Loading>
    </Wrapper>
  );
};

export default Loader;
