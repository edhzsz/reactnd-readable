import reducer from './index'

describe('reducer', () => {
  it('initial state is correct', () => {
    const expectedInitialState = {

    };

    expect(reducer()).toEqual(expectedInitialState);
  });
});