import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const modalRoot = document.querySelector('#modal-root');

function ModalContent(props) {
  return (
    <React.Fragment>
      <span className='modal-close-icon' onClick={props.dismiss}>❌</span>
      {props.children}
    </React.Fragment>
  )
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = 'modal';
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalContent {...this.props}/>,
      this.el,
    );
  }
}

export default Modal;
