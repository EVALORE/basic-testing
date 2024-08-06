import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = { a: 1, b: 2, action: Action.Add };
    const expected = 3;
    const result = simpleCalculator(input);
    expect(result).toBe(expected);
  });

  test('should subtract two numbers', () => {
    const input = { a: 2, b: 2, action: Action.Subtract };
    const expected = 0;
    const result = simpleCalculator(input);
    expect(result).toBe(expected);
  });

  test('should multiply two numbers', () => {
    const input = { a: 2, b: 2, action: Action.Multiply };
    const expected = 4;
    const result = simpleCalculator(input);
    expect(result).toBe(expected);
  });

  test('should divide two numbers', () => {
    const input = { a: 64, b: 4, action: Action.Divide };
    const expected = 16;
    const result = simpleCalculator(input);
    expect(result).toBe(expected);
  });

  test('should exponentiate two numbers', () => {
    const input = { a: 2, b: 3, action: Action.Exponentiate };
    const expected = 8;
    const result = simpleCalculator(input);
    expect(result).toBe(expected);
  });

  test('should return null for invalid action', () => {
    const input = { a: 1, b: 2, action: 'invalid' };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const input = { a: '1', b: '2', action: Action.Add };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });
});
