import React, { useEffect } from "react"
import { useCreateTodo, useTodos } from "../../hooks/useTodoApi"
import { Todo } from "../../models/Todo"
import { Failed, Idle, Loaded, Loading } from "../../utilities"

const TodoComponent = ({ todo }: { todo: Todo }) => {
    return (
        <div>
            {todo.text}<br/>
            {todo.owner}<br/>
            {todo.state}<br/>
        </div>
    )
}

const TodoCreator = () => {
    const [todosState, refresh] = useCreateTodo();
    const todo: Todo = { text: 'SampleTodo', owner: 'Pista', state: 'new' };

    return (
        <div>
            <TodoComponent todo={todo} />
            <button onClick={() => refresh(todo)}>Create</button>
        </div>
    );
}

export const Todos = () => {
    const [todosState, refresh] = useTodos();

    useEffect(() => {
        console.log(todosState);
    }, [todosState]);

    return (
        <div>
            <TodoCreator />
            <button onClick={refresh}>Load todos</button>
            {todosState instanceof Failed && <p>Error: {todosState.error}</p>}
            {todosState instanceof Loading && <p>Loading...</p>}

            {todosState instanceof Idle && <p>You haven't loaded the todos yet, try it!</p>}
            {todosState instanceof Loaded &&
                todosState.value.map(todo =>
                    <TodoComponent todo={todo} key={todo.id}/>
                )
            }
        </div>
    )
}
