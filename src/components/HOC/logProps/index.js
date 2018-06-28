import React, { Component } from 'react';

export default function logProps(Child) {
  class LogProps extends Component {
    componentDidUpdate(prevProps, prevState) {
      console.log(prevProps, this.props);
    }

    render() {
      const { props, forwardedRef } = this.props;

      return (
        <Child {...props} ref={forwardedRef} />
       )
    }
  }
  return React.forwardRef((props, ref) => {
    return (<LogProps {...props} forwardedRef={ref}/>)
  })
}
