import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { Hero } from '../Hero';

describe('hero', () => {
  describe('basic rendering', () => {
    it('should render hero text content', async () => {
      expect.assertions(1);

      await render(<Hero />);

      expect(screen.getByText('Hero')).toBeTruthy();
    });
  });
});
