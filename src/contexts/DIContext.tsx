import { createContext, useContext } from "react"
import { DogRepo } from "../repositories/dogRepo"

interface DIContextState {
    dogRepo: DogRepo;
}

const initialState: DIContextState = {
    dogRepo: new DogRepo(),
};

export const DIContext = createContext(initialState);