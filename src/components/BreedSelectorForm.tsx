import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { DogImageContext } from "../contexts/DogImageContext";

export default () => {
    const [error, setError] = useState<string|null>(null);
    const [state, setState] = useState("");
    const { dogRepo } = useContext(DIContext);
    const { setUrl } = useContext(DogImageContext);

    const refresh = useCallback(async () => {
        try {
            setError(null);
            const url = await dogRepo.getRandomOfBreed(state);
            setUrl(url);
        } catch(err) {
            setError(err instanceof Error ? err.message : `${err}`);
        }
    }, [state]);

    return (
        <div>
            {error !== null && <p>Error: {error}</p>}
            <input type="text" value={state} onChange={e => setState(e.target.value)}/>
            <button onClick={refresh}>Select</button>
        </div>
    );
}