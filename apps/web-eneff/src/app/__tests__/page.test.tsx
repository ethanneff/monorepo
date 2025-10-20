import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('page', () => {
  it('should render', () => {
    expect.assertions(1);

    render(<Home />);

    expect(screen.getByText('Ethan Neff')).toBeTruthy();
  });
});
