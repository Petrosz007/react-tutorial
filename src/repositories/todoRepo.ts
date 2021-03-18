import { Todo } from "../models/Todo";
import { fetchAs } from "../utilities";

export class TodoRepo {
    getTodos = (): Promise<Todo[]> =>
        fetchAs<Todo[]>('http://localhost:4000/todos');

    createTodo = (todo: Todo): Promise<Todo> => {
        return fetchAs<Todo>('http://localhost:4000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo),
        });
    }
}