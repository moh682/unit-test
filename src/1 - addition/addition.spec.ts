import { describe, it, expect } from 'vitest';
import { add } from './addition';

describe('addition', () => {
  it('should add 2 and 2', () => {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('should add -2 and 2', () => {
    expect(add(-2, 2)).to.be.equal(0);
  });
});
