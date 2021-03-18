import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { DogImageContext } from "../contexts/DogImageContext";
import { useRandomOfBreed } from "../hooks/useDogRepo";
import { Failed, Idle, Loaded, Loading, useEffectAsync } from "../utilities";

export default () => {
    const [state, setState] = useState("");
    const [loadingState, refresh] = useRandomOfBreed(state);

    return (
        <div>
            {loadingState instanceof Failed && <p>Error: {loadingState.error}</p>}
            {loadingState instanceof Loading && <p>Loading...</p>}

            {loadingState instanceof Idle && <p>You haven't loaded a breed yet, try it!</p>}

            <input type="text" value={state} onChange={e => setState(e.target.value)}/>
            <button onClick={refresh}>Select</button>
        </div>
    );
}