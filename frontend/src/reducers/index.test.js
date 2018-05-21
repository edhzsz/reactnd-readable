import reducer from './index';

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(reducer()).toEqual({'reducer': {}});
  });
});