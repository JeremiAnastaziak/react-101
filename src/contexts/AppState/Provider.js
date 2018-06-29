import React, { Component } from 'react';
import Context from './';

class AppStateProvider extends Component {
  handleSetState = (newState) => {
    this.setState({
      ...this.state,
      ...newState
    })
  }

  state = {
    value: 'Value from AppState',
    setState: this.handleSetState
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider> )
  }
}

export default AppStateProvider;
