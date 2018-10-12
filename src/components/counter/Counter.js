import React, { PureComponent } from 'react';

export default class Counter extends PureComponent {
  render() {
    const { decrement, value, increment } = this.props;
    return (
              <>
                <p>Redux counter</p>
                <button type="button" onClick={decrement}>-</button>
                <input type="text" value={value} />
                <button type="button" onClick={increment}>+</button>
              </>
    );
  }
}
