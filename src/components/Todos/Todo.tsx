import React, { useEffect, useState } from "react"
import { useFormHook } from "../../hooks/useFormHook"
import { useCreateTodo, useTodos } from "../../hooks/useTodoApi"
import { Todo } from "../../models/Todo"
import { Failed, Idle, Loaded, Loading } from "../../utilities"

import './Todo.css'

const TodoComponent = ({ todo }: { todo: Todo }) => {
    return (
        <div className="todo-element">
            <span className="todo-text">{todo.text}</span>
            <span className="todo-owner">{todo.owner}</span>
            <span className="todo-status">{todo.state}</span>
        </div>
    )
}

const TodoCreator = ({ refresh }: { refresh: () => void }) => {
    const [todosState, createTodo] = useCreateTodo();
    const text = useFormHook('');
    const owner = useFormHook('');
    const state = useFormHook('new');

    const onSubmit = async () => {
        await createTodo({ text: text.value, owner: owner.value, state: state.value as ('new'|'started'|'finished') });
        refresh();
    }

    return (
        <>
        <div className="todo-element">
            <input className="todo-text" {...text}/>
            <input className="todo-owner" {...owner}/>
            <select name="" {...state}>
                <option value="new">new</option>
                <option value="started">started</option>
                <option value="finished">finished</option>
            </select>
        </div>
        <button onClick={onSubmit}>Create</button>
        </>
    );
}

export const Todos = () => {
    const [todosState, refresh] = useTodos();

    useEffect(() => {
        console.log(todosState);
    }, [todosState]);

    return (
        <div>
            <TodoCreator refresh={refresh}/>
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
