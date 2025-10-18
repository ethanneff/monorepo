import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../Text';

describe('text', () => {
  it('should render text with title prop', () => {
    expect.assertions(1);

    render(<Text title="Hello World" />);

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('should render with testID prop', () => {
    expect.assertions(1);

    render(
      <Text
        testID="custom-test-id"
        title="Test"
      />,
    );

    expect(screen.getByTestId('custom-test-id')).toBeTruthy();
  });
});
