import { add } from '../src/calculator';
import assert from 'assert';

describe('calculator', () => {
  describe('add function', () => {
    test('should return 0 when arguments is empty', () => {
      expect(add()).toBe(0);
    });
    test('should return itself when arguments is alone', () => {
      expect(add('1')).toBe(1);
      expect(add('2')).toBe(2);
      expect(add('3')).toBe(3);
    });
    test('should return sum when arguments contain two numbers', () => {
      expect(add('1,2')).toBe(3);
      expect(add('51,49')).toBe(100);
      expect(add('1,90')).toBe(91);
      expect(add('6,9')).toBe(15);
    });
    test('2. Allow the Add method to handle an unknown amount of numbers', () => {
      expect(add('1,2,123,145,4567')).toBe(4838);
      expect(add('-1,2,123,145,4567')).toBe(4836);
    });
  });
});
