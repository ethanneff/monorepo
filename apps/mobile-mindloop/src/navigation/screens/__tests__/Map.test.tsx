import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { MapScreen } from '../Map';

describe('mapScreen', () => {
  it('should render', async () => {
    expect.assertions(1);

    await render(<MapScreen />);

    expect(screen.getByText('Map Screen')).toBeTruthy();
  });
});
