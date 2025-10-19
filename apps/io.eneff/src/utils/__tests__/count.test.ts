import { describe, expect, it } from '@jest/globals';
import { count } from '../count';

describe('count', () => {
  it('should return the number of times the function has been called', () => {
    expect.assertions(1);

    expect(count(1)).toBe(1);
  });
});
