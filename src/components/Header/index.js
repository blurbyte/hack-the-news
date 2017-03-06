import React from 'react';

// components
import Logo from '../Icons/Logo';
import Banner from './Banner';
import Tagline from './Tagline';
import Wrapper from './Wrapper';

class Header extends React.Component {
  // static component no need to rerender
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Banner>
        <Wrapper>
          <Logo width={66} height={78} />
          <Tagline>Random Dose<br /> of Hacker News<br />Stories</Tagline>
        </Wrapper>
      </Banner>
    );
  }
}

export default Header;
