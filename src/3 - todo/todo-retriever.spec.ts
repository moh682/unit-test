import { describe, expect, it, vi } from 'vitest';
import { ITodo, retrieveTodos } from './todo-retriever';

/** Integration test */

describe('todo', () => {
  it('checks for todo-retrieval', async () => {
    const todos = await retrieveTodos();
    expect(todos).to.not.be.empty;
  });
});

/** We need to stub and mock retrieveTodos function */

vi.mock('node-fetch', () => {
  return {
    default: () => {
      return {
        json: () => [{ completed: false, id: 2, title: 'first Id', userId: 1 }] as ITodo[],
      };
    },
  };
});
