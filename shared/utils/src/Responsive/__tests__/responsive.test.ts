import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { Dimensions } from 'react-native';
import { responsive } from '../responsive';

const mockDimensionsGet = jest.spyOn(Dimensions, 'get');

const baseSize = 375;

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

    it('should work with different numeric sizes', () => {
      expect.assertions(5);
      expect(responsive(0)).toBe(0);
      expect(responsive(8)).toBe(8);
      expect(responsive(24)).toBe(24);
      expect(responsive(48)).toBe(48);
      expect(responsive(100)).toBe(100);
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

    it('should scale up with scale = min(width/375, 2)', () => {
      expect.assertions(1);

      // scale = min(750/375, 2) = 2
      const result = responsive(16);

      expect(result).toBe(32);
    });

    it('should scale proportionally for different sizes', () => {
      expect.assertions(3);
      expect(responsive(8)).toBe(16);
      expect(responsive(24)).toBe(48);
      expect(responsive(100)).toBe(200);
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

    it('should scale down for smaller screens', () => {
      expect.assertions(1);

      const result = responsive(16);
      const scale = 320 / baseSize;

      expect(result).toBe(16 * scale);
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

    it('should cap scale at maxScaleFactor for tablet sizes', () => {
      expect.assertions(1);

      // scale = min(768/375, 2) = 2
      const result = responsive(16);

      expect(result).toBe(32);
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

    it('should handle very large sizes at baseline', () => {
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
      const scale = 414 / baseSize;

      expect(result).toBeCloseTo(16 * scale, 10);
    });
  });
});
