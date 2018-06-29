import React from 'react';

function Logger({ data }) {
  return (
  <pre>
    {JSON.stringify(data, 0, 4)}
  </pre>
  )
}

export default Logger;
