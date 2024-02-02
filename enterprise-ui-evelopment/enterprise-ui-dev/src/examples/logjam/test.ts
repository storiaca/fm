import { test, expect, vi } from 'vitest';
import { log } from './log';

test.todo('it spies on the multiply method', () => {
  const mock = vi.fn();

  mock();
  mock();
  mock();

  expect(mock).toHaveBeenCalled();
});
