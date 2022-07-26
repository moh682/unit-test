import { describe, expect, it } from 'vitest';
import { ITodo, retrieveTodos } from './todo-retriever';

/** Integration test */

describe('todo', () => {
  it('checks for todo-retrieval', async () => {
    const todos = await retrieveTodos();
    expect(todos).to.not.be.empty;
  });
});

/** We need to stub and mock retrieveTodos function */
