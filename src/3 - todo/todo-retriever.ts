import fetch from 'node-fetch';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const retrieveTodos = async (): Promise<ITodo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const body = await response.json();
  return body as ITodo[];
};
