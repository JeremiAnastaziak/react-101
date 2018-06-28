import React, { Component } from 'react';
import logProps from '../HOC/logProps';

const Input = React.forwardRef((props, ref) => {
  return (<input ref={ref} {...props} />)
})

export const LogPropsInput = logProps(Input);
export default Input;
