import React, { Component } from 'react';
import Input, { InputWithPropsLogger } from '../input';
import withAppState from '../../contexts/AppState/with';
import Logger from '../logger';

class Form extends Component {
  constructor() {
    super();
    this.inputRefHOC = React.createRef();
  }
  componentDidMount() {
    this.inputRefHOC.current.focus();
  }

  handleOnChange = (e) => {
    this.props.AppState.setState({
      value: e.target.value
    })
  }

  render(){
    const { AppState } = this.props;

    return(
      <React.Fragment>
        <p>This one updates context (onChange prop passed)</p>
        <Input onChange={this.handleOnChange} defaultValue={AppState.value} />

        <p>This one not</p>
        <InputWithPropsLogger ref={this.inputRefHOC} defaultValue={AppState.value} />

        <p>App state context</p>
        <Logger data={AppState}/>
      </React.Fragment>
    )
  }
}

export default withAppState(Form);
