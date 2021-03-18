import { useCallback, useContext, useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { DogImageContext } from "../contexts/DogImageContext";
import { Failed, Idle, Loaded, Loading, Status, useEffectAsync } from "../utilities";

export const useRandomOfBreed = (breed: string): [Status<string,string>, () => void]=> {
    const [status, setStatus] = useState<Status<string,string>>(new Idle());
    const { dogRepo } = useContext(DIContext);
    const { setUrl } = useContext(DogImageContext);

    const refresh = useCallback(async () => {
        try {
            setStatus(new Loading());
            const url = await dogRepo.getRandomOfBreed(breed);
            setUrl(url);
            setStatus(new Loaded(url));
        } catch(err) {
            const message = err instanceof Error ? err.message : `${err}`;
            setStatus(new Failed(message));
        }
    }, [breed]);

    return [status, refresh];
}

export const useRandomOfBreed2 = (breed: string): [Status<string,string>]=> {
    const [status, setStatus] = useState<Status<string,string>>(new Idle());
    const { dogRepo } = useContext(DIContext);
    const { setUrl } = useContext(DogImageContext);

    useEffectAsync(async () => {
        try {
            setStatus(new Loading());
            const url = await dogRepo.getRandomOfBreed(breed);
            setUrl(url);
            setStatus(new Loaded(url));
        } catch(err) {
            const message = err instanceof Error ? err.message : `${err}`;
            setStatus(new Failed(message));
        }
    }, [breed]);

    return [status];
}
