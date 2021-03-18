import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { useEffectAsync } from "../utilities";

export default () => {
    const [state, setState] = useState<string>("");
    const { dogRepo } = useContext(DIContext);

    useEffectAsync(async () => {
        const url = await dogRepo.getRandom();
        setState(url);
    }, []);

    return (
            <img src={state} alt=""/>
    )
}