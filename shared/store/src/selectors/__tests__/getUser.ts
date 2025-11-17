import { describe, expect, it } from '@jest/globals';
import { getMockMegaStore } from '../../testing/getMockMegaStore';
import { getUser } from '../getUser';

describe('getUser', () => {
  it('should return custom user agent correctly', () => {
    const { store } = getMockMegaStore();
    const result = getUser(store);

    expect(result).toBeNull();
  });
});
