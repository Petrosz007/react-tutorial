import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { useEffectAsync } from "../utilities";

import './RandomDogImages.css';

export default () => {
    const [state, setState] = useState<string[]>([]);
    const [count, setCount] = useState(0);
    const { dogRepo } = useContext(DIContext);

    useEffectAsync(async () => {
        const urls = await dogRepo.getSomeRandom(count);
        setState(urls);
    }, [count]);

    return (
        <>
        <input type="number" value={count} onChange={e => setCount(parseInt(e.target.value))}/>
        <div className="dog-images">
            {state.map(url =>
                <img src={url} alt=""/>
            )}
        </div>
        </>
    )
}