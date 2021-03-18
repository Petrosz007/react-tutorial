import { createContext, useContext } from "react"
import { BitcoinRepo } from "../repositories/bitcoinRepo";
import { DogRepo } from "../repositories/dogRepo"

interface DIContextState {
    dogRepo: DogRepo;
    bitcoinRepo: BitcoinRepo;
}

const initialState: DIContextState = {
    dogRepo: new DogRepo(),
    bitcoinRepo: new BitcoinRepo(),
};

export const DIContext = createContext(initialState);