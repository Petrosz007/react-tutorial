import { useCallback, useContext, useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { DogImageContext } from "../contexts/DogImageContext";
import { Todo } from "../models/Todo";
import { Failed, Idle, Loaded, Loading, Status } from "../utilities";

export const useTodos = (): [Status<Todo[],string>, () => void]=> {
    const [status, setStatus] = useState<Status<Todo[],string>>(new Idle());
    const { todoRepo } = useContext(DIContext);

    const refresh = useCallback(async () => {
        try {
            setStatus(new Loading());
            const todos = await todoRepo.getTodos();
            setStatus(new Loaded(todos));
        } catch(err) {
            const message = err instanceof Error ? err.message : `${err}`;
            setStatus(new Failed(message));
        }
    }, []);

    return [status, refresh];
}

export const useCreateTodo = () => {
    const [status, setStatus] = useState<Status<Todo,string>>(new Idle());
    const { todoRepo } = useContext(DIContext);

    const create = useCallback(async (todo: Todo) => {
        try {
            setStatus(new Loading());
            const todoResponse = await todoRepo.createTodo(todo);
            setStatus(new Loaded(todoResponse));
        } catch(err) {
            const message = err instanceof Error ? err.message : `${err}`;
            setStatus(new Failed(message));
        }
    }, []);

    return [status, create] as const;
}

