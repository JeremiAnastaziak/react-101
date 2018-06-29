import React, { Component } from 'react';
import Context from './';

export default function withAppState(Element) {
  return class WithAppState extends Component {
    render() {
      return (
        <Context.Consumer>
          {state => <Element {...this.props} AppState={state}/>}
        </Context.Consumer>
      )
    }
  }
}
