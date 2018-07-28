import React, { Component } from 'react';

class MousePosition extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 }
  }

  handleMouseMove = ({ clientX, clientY }) => {
    this.setState({
      x: clientX,
      y: clientY,
    })
  }

  render() {
    return (
    <div onMouseMove={this.handleMouseMove}>
      {this.props.render(this.state)}
    </div> )
  }
}

export default MousePosition;
