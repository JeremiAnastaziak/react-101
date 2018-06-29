import React, { Component } from 'react';
import AppState from './';

export default function withAppState(Element) {
  return class WithAppState extends Component {
    render() {
      return (
        <AppState.Consumer>
          {state => <Element {...this.props} AppState={state}/>}
        </AppState.Consumer>
      )
    }
  }
}
