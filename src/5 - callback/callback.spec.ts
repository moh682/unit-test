import { describe, expect, it, vi } from 'vitest';
import { delayyer } from './callback';

describe('callback', () => {
  it('should execute callback function', async () => {
    const myCallback = vi.fn();
    await delayyer(myCallback);
    expect(myCallback).toHaveBeenCalledOnce();
  });
});
