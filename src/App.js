import React, { Component, Fragment } from 'react';
import Form from './components/form';
import MousePosition from './components/mousePosition';
import Logger from './components/logger';
import AppStateProvider from './contexts/AppState/Provider';
import TextArea from './components/textarea';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppStateProvider>
          <Form/>
          <MousePosition render={({ x, y }) =>
            <React.Fragment>
              <p>Render props pattern</p>
              <Logger data={{mouseX: x, mouseY: y}} />
            </React.Fragment>
          }/>
          <TextArea />
          <Counter />
        </AppStateProvider>
      </Fragment>
    );
  }
}

export default App;
