import React from 'react';
import styled from 'styled-components';

// components
import Logo from '../Icons/Logo';
import RegularContentWrapper from '../ContentWrapper';
import Banner from './Banner';
import Tagline from './Tagline';

const ContentWrapper = styled(RegularContentWrapper)`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 4.2rem;
`;

class Header extends React.Component {
  // static component no need to rerender
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Banner>
        <ContentWrapper>
          <Logo width={66} height={78} />
          <Tagline>Random Dose<br /> of Hacker News<br />Stories</Tagline>
        </ContentWrapper>
      </Banner>
    );
  }
}

export default Header;
