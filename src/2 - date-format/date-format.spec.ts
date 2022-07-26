import { describe, expect, it } from 'vitest';
import { customFormat } from './date-format';

const addPadding = (num: number) => num.toString().padStart(2, '0');

describe('date-format', () => {
  it('format date with moment', () => {
    const date = new Date();
    const format = customFormat(date);

    const day = addPadding(date.getDate());
    const month = addPadding(date.getMonth() + 1);
    const year = date.getFullYear().toString().slice(2);

    expect(format).to.be.equal(`${day} .. ${month} -- ${year}`);
  });
});
