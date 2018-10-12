import * as actions from '../actions';

describe('actions', () => {
  test('returns correct increment action', () => {
    expect(actions.increment()).toMatchSnapshot();
  });

  test('returns correct decrement action', () => {
    expect(actions.decrement()).toMatchSnapshot();
  });
});
