import { describe, expect, it } from 'vitest';
import { autheneticate } from './auth';

describe('authenticate', () => {
  it('checks for valid email', async () => {
    const token = await autheneticate('');
    expect(token).to.be.empty;
  });
});
