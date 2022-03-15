import { add } from '../src/calculator';
import assert from 'assert';

describe('calculator', () => {
  describe('add function', () => {
    test('validate arguments', () => {
      expect(add('abc')).toBe(0);
    });
    test('should return NaN when arguments is one characters and its not number', () => {
      expect(add(',')).toBeNaN();
      expect(add('w')).toBeNaN();
    });
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
      expect(add('1,2,123,145')).toBe(271);
    });
    test('3. Allow the Add method to handle new lines between numbers', () => {
      expect(add('1\n2,3')).toBe(6);
      expect(add('1\n2\n3')).toBe(6);
    });
    test('5. Calling Add with a negative number will throw an exception', () => {
      expect(() => add('-1, -3')).toThrow('negatives not allowed -1 -3');
      expect(() => add('-1, 3')).toThrow('negatives not allowed');
    });
    test('6. Numbers bigger than 1000 should be ignored', () => {
      expect(add('100000, 2, 3, 20000, 1000')).toEqual(1005);
    });
    test('7. Delimiters can be of any length with the following format', () => {
      expect(add('//[***]\n1***2***3**&(*&(*&4')).toEqual(10);
    });
  });
});
