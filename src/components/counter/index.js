import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import Counter from './Counter';

export default connect(
  ({ counter }) => ({ value: counter }),
  {
    increment: actions.increment,
    decrement: actions.decrement,
  },
)(Counter);
