import { describe, expect, it, vi } from 'vitest';
import { delayyer } from './callback';

const myCallback = vi.fn();

describe('callback', () => {
  it('should execute callback function', async () => {
    await delayyer(myCallback);

    expect(myCallback).toHaveBeenCalledOnce;
  });
});
