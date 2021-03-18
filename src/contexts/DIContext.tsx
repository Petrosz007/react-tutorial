import { createContext, useContext } from "react"
import { DogRepo } from "../repositories/dogRepo"
import { TodoRepo } from "../repositories/todoRepo";

interface DIContextState {
    dogRepo: DogRepo;
    todoRepo: TodoRepo;
}

const initialState: DIContextState = {
    dogRepo: new DogRepo(),
    todoRepo: new TodoRepo(),
};

export const DIContext = createContext(initialState);