import { describe, expect, it, vi } from 'vitest';
import { ITodo, retrieveTodos } from './todo-retriever';

/** Integration test */

const singleTodo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

// const mockedRes = {
//   body: JSON.stringify([singleTodo])
// }

vi.mock('node-fetch', async () => {
  const fetch = (url: string) => {
    return {
      json: () => [singleTodo],
    };
  };

  return {
    default: fetch,
  };
});

describe('todo', () => {
  it('checks for todo-retrieval', async () => {
    const todos = await retrieveTodos();

    expect(todos[0]).toBe(singleTodo);
    expect(todos).toMatchObject([singleTodo]);
  });
});

/** We need to stub and mock retrieveTodos function */
