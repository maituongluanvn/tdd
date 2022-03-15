import { add } from '../src/calculator';
import assert from 'assert';

// describe('calculator', () => {
// describe('add function', () => {
test('should return 0 when the value is empty', () => {
  expect(add()).toEqual(0);
});
// });
// });
