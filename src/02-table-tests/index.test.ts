import { simpleCalculator, Action } from './index';

interface ValidTestCase {
  a: number;
  b: number;
  action: Action;
  expected: number;
}

interface InvalidTestCase {
  a: any;
  b: any;
  action: any;
  expected: null;
}

const validTestCases: ValidTestCase[] = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 6, b: 0, action: Action.Divide, expected: Infinity },
  { a: 0, b: 6, action: Action.Divide, expected: 0 },
  { a: 0, b: 6, action: Action.Multiply, expected: 0 },
  { a: 4, b: 3, action: Action.Exponentiate, expected: 64 },
  { a: 4, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: Math.cos(0), b: 1, action: Action.Add, expected: 2 },
  // Add more cases as needed
];

const invalidTestCases: InvalidTestCase[] = [
  { a: 1, b: 2, action: 'invalid', expected: null },
  { a: '1', b: '2', action: Action.Add, expected: null },
  { a: null, b: 2, action: Action.Add, expected: null },
  { a: 1, b: undefined, action: Action.Add, expected: null },
  { a: 1, b: '2', action: undefined, expected: null },
  // Add more cases as needed
];

describe('SimpleCalculator Tests', () => {
  function testFunction(testCases: InvalidTestCase[] | ValidTestCase[]) {
    test.each(testCases.map(Object.values))(
      'expect %p when %p %p %p is performed',
      (a, b, action, expected) => {
        const input = { a, b, action };
        const result = simpleCalculator(input);
        expect(result).toBe(expected);
      },
    );
  }

  describe('Valid Test Cases', () => {
    testFunction(validTestCases);
  });

  describe('Invalid Test Cases', () => {
    testFunction(invalidTestCases);
  });
});
