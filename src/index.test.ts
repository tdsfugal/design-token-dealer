import dummy from './index';

describe('index', () => {
  it('should export dummy value', () => {
    expect(dummy).toBe('hello');
  });

  it('should be a string', () => {
    expect(typeof dummy).toBe('string');
  });
});

