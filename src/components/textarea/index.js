import React, { Fragment } from 'react';
import debounce from 'lodash.debounce';

class textArea extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      apiRequestCount: 0
    }

    this.emitHandleChange = debounce(this.apiRequest, 500);
  }

  componentWillUnmount() {
    this.emitHandleChange.cancel();
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ value });

    this.emitHandleChange();
  }

  apiRequest = () => {
    this.setState({
      ...this.state,
      apiRequestCount: this.state.apiRequestCount + 1
    })
  }

  render() {
    return (
      <Fragment>
        <p>Debounced search input (not a React pattern)</p>
        <h5>
          Number of api request performed:{' '}
          {this.state.apiRequestCount}
        </h5>
        <label htmlFor="search">Search:{' '}</label>
        <input id="search" data-role="search" type="text" value={this.state.value} onChange={this.handleChange}/>
      </Fragment>
    );
  }
};

export default textArea;
