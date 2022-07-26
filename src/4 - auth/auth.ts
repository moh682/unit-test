import { sign } from 'jsonwebtoken';
import fetch from 'node-fetch';
import { SUPER_SECRET } from './secret';

/**
 * Has additional information
 */
export interface IUser {
  id: number;
  name: string;
  email: string;
}

export const autheneticate = async (email: string) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users?email=' + email);
  const users = (await response.json()) as IUser[];

  const user = users[0];

  if (!user) return '';

  return sign(
    {
      email: user.email,
      id: user.id,
    },
    SUPER_SECRET
  );
};
