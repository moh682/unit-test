import { describe, expect, it, vi, vitest } from 'vitest';
import { autheneticate, IUser } from './auth';

const correctEmail = 'Sincere@april.biz';
const wrongEmail = 'Sincere@november.biz';
const correctJWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJTaW5jZXJlQGFwcmlsLmJpeiIsImlhdCI6MTY1OTQyODkwMX0.67iXqXusePz4f2UkPG_sbndi7cV_dfEfqAd8MXg1r-I';

vi.mock('jsonwebtoken', () => {
  return {
    sign: () => correctJWT,
  };
});

describe('authenticate', () => {
  it('checks for valid email', async () => {
    const token = await autheneticate(wrongEmail);
    expect(token).to.be.equal('');
  });

  it('checks for valid email', async () => {
    const token = await autheneticate(correctEmail);
    expect(token).to.be.equal(correctJWT);
  });
});

vi.mock('node-fetch', () => {
  return {
    default: (url: string) => {
      return {
        json: () => {
          return new URL(url).searchParams.get('email') === correctEmail
            ? ([
                {
                  email: correctEmail,
                  id: 123,
                  name: 'Leanne Graham',
                },
              ] as IUser[])
            : [];
        },
      };
    },
  };
});
