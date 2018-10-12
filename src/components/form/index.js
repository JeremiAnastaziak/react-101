import React, { Component } from 'react';
import Input, { InputWithPropsLogger } from '../input';
import Modal from '../modal';
import withAppState from '../../contexts/AppState/with';
import Logger from '../logger';

class Form extends Component {
  constructor() {
    super();
    this.inputRefHOC = React.createRef();
  }

  state = {
    showModal: false,
  }

  componentDidMount() {
    this.inputRefHOC.current.focus();
  }

  handleOnChange = (e) => {
    const { AppState } = this.props;
    AppState.setState({
      value: e.target.value,
    });
  }

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { AppState } = this.props;
    const { showModal } = this.state;

    return (
      <React.Fragment>
        <p>App state context</p>
        <Logger data={AppState} />

        <p>This one updates context (onChange prop passed)</p>
        <Input onChange={this.handleOnChange} defaultValue={AppState.value} />

        <p>This one not</p>
        <InputWithPropsLogger ref={this.inputRefHOC} defaultValue={AppState.value} />

        <p>Modal Portal</p>
        <button onClick={this.toggleModal} type="button">
          Show modal
        </button>

        {showModal
          && (
          <Modal dismiss={this.toggleModal}>
            Modal content
          </Modal>
          )}
      </React.Fragment>
    );
  }
}

export default withAppState(Form);
