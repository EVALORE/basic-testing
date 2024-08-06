import { simpleCalculator, Action } from './index';

const validTestCases = [
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

const invalidTestCases = [
  { a: 1, b: 2, action: 'invalid', expected: null },
  { a: '1', b: '2', action: Action.Add, expected: null },
  { a: null, b: 2, action: Action.Add, expected: null },
  { a: 1, b: undefined, action: Action.Add, expected: null },
  { a: 1, b: '2', action: undefined, expected: null },
  // Add more cases as needed
];

describe('SimpleCalculator Tests', () => {
  function testFunction(
    testCase:
      | (typeof validTestCases)[number]
      | (typeof invalidTestCases)[number],
  ) {
    test(`expect ${testCase.expected} for ${testCase.a} ${testCase.action} ${testCase.b}`, () => {
      expect(
        simpleCalculator({
          a: testCase.a,
          b: testCase.b,
          action: testCase.action,
        }),
      ).toBe(testCase.expected);
    });
  }

  describe('Valid Test Cases', () => {
    validTestCases.forEach((testCase) => {
      testFunction(testCase);
    });
  });

  describe('Invalid Test Cases', () => {
    invalidTestCases.forEach((testCase) => {
      testFunction(testCase);
    });
  });
});
