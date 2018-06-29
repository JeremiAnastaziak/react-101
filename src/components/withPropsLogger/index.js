import React, { Component } from 'react';

export default function withPropsLogger(Child) {
  class WithPropsLogger extends Component {
    componentDidUpdate(prevProps, prevState) {
      console.log(prevProps, this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      return (
        <Child {...rest} ref={forwardedRef} />
       )
    }
  }
  return React.forwardRef((props, ref) => {
    return (<WithPropsLogger {...props} forwardedRef={ref}/>)
  })
}
