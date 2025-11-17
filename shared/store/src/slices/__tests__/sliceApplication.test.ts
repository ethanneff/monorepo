import { describe, expect, it } from '@jest/globals';
import { getMockStore } from '../../testing/getMockMegaStore';
import { sliceApplication } from '../sliceApplication';

describe('sliceApplication', () => {
  it('should increment appOpenCount on onAppOpen', () => {
    const { api, get, set, store } = getMockStore();
    const slice = sliceApplication(set, get, api);

    expect(store.application.appOpenCount).toBe(0);

    slice.actions.incrementAppOpenCount();

    expect(store.application.appOpenCount).toBe(1);
  });
});
