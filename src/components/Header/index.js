import React from 'react';

// components
import Logo from '../Icons/Logo';
import Banner from './Banner';
import Tagline from './Tagline';

class Header extends React.Component {
  // static component no need to rerender
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Banner>
        <Logo width={88} height={104} />
        <Tagline>Random<br />Hacker News<br />Story</Tagline>
      </Banner>
    );
  }
}

export default Header;
