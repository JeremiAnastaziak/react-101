import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions';

class Counter extends PureComponent {
    render() {
        return (
            <>
                <p>Redux counter</p>
                <button onClick={this.props.decrement}>-</button>
                <input type="text" value={this.props.value} />
                <button onClick={this.props.increment}>+</button>
            </>
        )
    }
}

export default connect(
    ({ counter }) => ({ value: counter }),
    {
        increment,
        decrement
    }
    )(Counter);
