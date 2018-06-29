import React from 'react';
import withPropsLogger from '../withPropsLogger';

const Input = React.forwardRef((props, ref) => {
  return (<input ref={ref} {...props} />)
})

export const InputWithPropsLogger = withPropsLogger(Input);

export default Input;
