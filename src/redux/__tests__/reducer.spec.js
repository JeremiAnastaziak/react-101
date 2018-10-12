import reducer from '../reducer';

describe('reducer', () => {
  test('handles actions', () => {
    expect(
      reducer(
        undefined,
        {
          type: 'INCREMENT',
          payload: {
            amount: 1,
          },
        },
      ),
    ).toMatchSnapshot();

    expect(
      reducer(
        undefined,
        {
          type: 'DECREMENT',
          payload: {
            amount: -1,
          },
        },
      ),
    ).toMatchSnapshot();
  });

  test('returns default state on unknown action', () => {
    expect(
      reducer(
        undefined,
        {
          type: 'UNKNOWN_ACTION',
          payload: {
            amount: -1,
          },
        },
      ),
    ).toMatchSnapshot();
  });
});
