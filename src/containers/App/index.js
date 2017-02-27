import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import AppWrapper from './AppWrapper';
import Header from '../../components/Header';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Helmet titleTemplate="%s | Hack the News" defaultTitle="Hack the News" meta={[{ name: 'description', content: 'Random Dose of Hacker News Stories' }]} />
        <Header />
        {this.props.children}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
