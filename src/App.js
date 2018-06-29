import React, { Component, Fragment } from 'react';
import Form from './components/form';
import Logger from './components/logger';
import AppStateProvider from './contexts/AppState/Provider';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppStateProvider>
          <Form />
        </AppStateProvider>
      </Fragment>

    );
  }
}

export default App;
