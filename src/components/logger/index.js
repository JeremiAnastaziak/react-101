import React from 'react';
import withAppState from '../HOC/withAppState';

function Logger({ data }) {
  return (
  <pre>
    {JSON.stringify(data, 0, 4)}
  </pre>
  )
}

export default withAppState(Logger);
