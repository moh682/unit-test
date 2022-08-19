import { describe, expect, it, vi, vitest } from 'vitest';
import 'vi-fetch/setup';
import { mockGet, prepareFetch } from 'vi-fetch';
import { autheneticate, IUser } from './auth';

import { decode } from 'jsonwebtoken';

prepareFetch(globalThis, 'node-fetch');

const correctEmail = 'Sincere@april.biz';
const wrongEmail = 'Sincere@november.biz';
const correctJWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJTaW5jZXJlQGFwcmlsLmJpeiIsImlhdCI6MTY1OTQyODkwMX0.67iXqXusePz4f2UkPG_sbndi7cV_dfEfqAd8MXg1r-I';

describe('authenticate', () => {
  mockGet('https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz').willResolve([
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ]);
  mockGet('https://jsonplaceholder.typicode.com/users?email=Sincere@november.biz').willResolve([]);

  it.only('checks for valid email', async () => {
    const receivedJWT = await autheneticate('Sincere@april.biz');

    const payload: any = decode(receivedJWT);
    const mockedPayload: any = decode(correctJWT);
    expect(payload.email).toEqual(mockedPayload.email);
  });

  it('checks for invalid email', async () => {
    const receivedJWT = await autheneticate('Sincere@november.biz');

    expect(receivedJWT).toEqual('');
  });
});
