import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { AccountScreen } from '../Account';

describe('homeScreen', () => {
  it('should render', () => {
    expect.assertions(1);

    render(<AccountScreen />);

    expect(screen.getByText('Security Settings')).toBeTruthy();
  });
});
