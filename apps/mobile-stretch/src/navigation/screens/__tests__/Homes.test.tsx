import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { HomeScreen } from '../Home';

describe('homeScreen', () => {
  it('should render', async () => {
    expect.assertions(1);

    await render(<HomeScreen />);

    expect(
      screen.getByText(
        'Edit src/navigation/screens/Home.tsx to edit this screen.',
      ),
    ).toBeTruthy();
  });
});
