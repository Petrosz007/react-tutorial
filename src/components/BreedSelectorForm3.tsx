import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { DogImageContext } from "../contexts/DogImageContext";
import { useRandomOfBreed, useRandomOfBreed2 } from "../hooks/useDogRepo";
import { Failed, Idle, Loaded, Loading, useEffectAsync } from "../utilities";
import BreedSelector from "./BreedSelector";

export default () => {
    const [state, setState] = useState("malamute");
    const [loadingState] = useRandomOfBreed2(state);
    const { dogRepo } = useContext(DIContext);

    return (
        <div>
            {loadingState instanceof Failed && <p>Error: {loadingState.error}</p>}
            {loadingState instanceof Loading && <p>Loading...</p>}

            {loadingState instanceof Idle && <p>You haven't loaded a breed yet, try it!</p>}

            <BreedSelector value={state} onChange={setState} />
        </div>
    );
}