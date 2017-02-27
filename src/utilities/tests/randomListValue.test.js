import randomListValue from '../randomListValue';

describe('randomListValue', () => {
  it('should get random value from array', () => {
    const list = [1, 5, 6, 8];
    expect(randomListValue(list)).toEqual(expect.any(Number));
  });
});
