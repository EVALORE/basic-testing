import {
  resolveValue,
  throwError,
  throwCustomError,
  rejectCustomError,
  MyAwesomeError,
} from './index';

describe('error handling functions', () => {
  describe('resolveValue', () => {
    it('resolves with the provided value', async () => {
      const value = 42;
      await expect(resolveValue(value)).resolves.toBe(value);
    });
  });

  describe('throwError', () => {
    it('throws an error with the provided message', () => {
      const message = 'error!';
      expect(() => throwError(message)).toThrow(message);
    });

    it('throws an error with a default message if none is provided', () => {
      const defaultMessage = 'Oops!';
      expect(() => throwError()).toThrow(defaultMessage);
    });
  });

  describe('throwCustomError', () => {
    it('throws a custom error', () => {
      expect(() => throwCustomError()).toThrow(MyAwesomeError);
    });

    it('throws a custom error with the correct message', () => {
      expect(() => throwCustomError()).toThrow(
        'This is my awesome custom error!',
      );
    });
  });

  describe('rejectCustomError', () => {
    it('rejects with a custom error', async () => {
      await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
    });

    it('rejects with a custom error with the correct message', async () => {
      const defaultMessage = 'This is my awesome custom error!';
      await expect(rejectCustomError()).rejects.toThrow(defaultMessage);
    });
  });
});
