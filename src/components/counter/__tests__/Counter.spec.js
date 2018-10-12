import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../Counter';

describe('Counter component', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Counter increment={() => {}} decrement={() => {}} value="10" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
