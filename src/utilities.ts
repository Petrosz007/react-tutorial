import { useEffect } from "react";

export const useEffectAsync = (f: () => Promise<void>, deps?: React.DependencyList) => 
    useEffect(() => {f()}, deps);

export const fetchAs = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Response was not ok: ${response.status}: ${await response.text()}`);
    }

    const data = await response.json() as T;
    return data;
}

export const fetchNoCorsAs = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, { mode: 'no-cors' });
    if(!response.ok) {
        throw new Error(`Response was not ok: ${response.status}: ${await response.text()}`);
    }

    const data = await response.json() as T;
    return data;
}

export class Idle {}
export class Loading {}
export class Loaded<T> {
    constructor(public readonly value: T) {}
}
export class Failed<T> {
    constructor(public readonly error: T) {}
}

export type Status<T,E> = Idle | Loading | Loaded<T> | Failed<E>;
