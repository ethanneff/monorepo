import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { Dimensions } from 'react-native';
import { responsive } from '../responsive';

const mockDimensionsGet = jest.spyOn(Dimensions, 'get');

describe('responsive', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('baseline dimensions (375px)', () => {
    beforeEach(() => {
      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 667,
        scale: 2,
        width: 375,
      });
    });

    it('should return the size unchanged when smallest dimension equals baseline', () => {
      expect.assertions(1);

      const result = responsive(16);

      expect(result).toBe(16);
    });

    it('should work with different Base4 sizes', () => {
      expect.assertions(5);
      expect(responsive(0)).toBe(0);
      expect(responsive(8)).toBe(8);
      expect(responsive(24)).toBe(24);
      expect(responsive(48)).toBe(48);
      expect(responsive(100)).toBe(100);
    });

    it('should handle custom factor parameter', () => {
      expect.assertions(1);

      const result = responsive(16, 0.5);

      expect(result).toBe(16);
    });
  });

  describe('larger dimensions', () => {
    beforeEach(() => {
      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 1334,
        scale: 2,
        width: 750,
      });
    });

    it('should scale up responsive with default factor (0.25)', () => {
      expect.assertions(1);

      const result = responsive(16);

      expect(result).toBe(20);
    });

    it('should scale proportionally for different sizes', () => {
      expect.assertions(3);
      expect(responsive(8)).toBe(10);
      expect(responsive(24)).toBe(30);
      expect(responsive(100)).toBe(125);
    });

    it('should apply custom factor correctly', () => {
      expect.assertions(2);

      expect(responsive(16, 0.5)).toBe(24);

      expect(responsive(16, 1)).toBe(32);
    });
  });

  describe('smaller dimensions', () => {
    beforeEach(() => {
      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 568,
        scale: 2,
        width: 320,
      });
    });

    it('should scale down responsive for smaller screens', () => {
      expect.assertions(1);

      const result = responsive(16);
      const expected = 16 * (1 + (320 / 375 - 1) * 0.25);

      expect(result).toBeCloseTo(expected, 2);
    });
  });

  describe('landscape orientation', () => {
    beforeEach(() => {
      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 375,
        scale: 2,
        width: 667,
      });
    });

    it('should use the smallest dimension (height in this case)', () => {
      expect.assertions(1);

      const result = responsive(16);

      expect(result).toBe(16);
    });
  });

  describe('tablet dimensions', () => {
    beforeEach(() => {
      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 1024,
        scale: 2,
        width: 768,
      });
    });

    it('should scale appropriately for tablet sizes', () => {
      expect.assertions(1);

      const result = responsive(16);
      const expected = 16 * (1 + (768 / 375 - 1) * 0.25);

      expect(result).toBeCloseTo(expected, 2);
    });
  });

  describe('edge cases', () => {
    beforeEach(() => {
      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 667,
        scale: 2,
        width: 375,
      });
    });

    it('should handle zero size', () => {
      expect.assertions(1);
      expect(responsive(0)).toBe(0);
    });

    it('should handle zero factor', () => {
      expect.assertions(1);

      const result = responsive(16, 0);

      expect(result).toBe(16);
    });

    it('should handle negative factor (theoretical edge case)', () => {
      expect.assertions(1);

      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 1334,
        scale: 2,
        width: 750,
      });

      const result = responsive(16, -0.25);

      expect(result).toBe(12);
    });

    it('should handle very large sizes', () => {
      expect.assertions(1);
      expect(responsive(1000)).toBe(1000);
    });
  });

  describe('precision', () => {
    beforeEach(() => {
      mockDimensionsGet.mockReturnValue({
        fontScale: 1,
        height: 896,
        scale: 3,
        width: 414,
      });
    });

    it('should maintain precision in calculations', () => {
      expect.assertions(1);

      const result = responsive(16);
      const expected = 16 * (1 + (414 / 375 - 1) * 0.25);

      expect(result).toBeCloseTo(expected, 10);
    });
  });
});
