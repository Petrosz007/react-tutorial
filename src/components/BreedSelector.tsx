import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { DIContext } from "../contexts/DIContext";
import { DogImageContext } from "../contexts/DogImageContext";
import { useRandomOfBreed, useRandomOfBreed2 } from "../hooks/useDogRepo";
import { Failed, Idle, Loaded, Loading, useEffectAsync } from "../utilities";

export default ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
    const { dogRepo } = useContext(DIContext);
    const [breeds, setBreeds] = useState<string[]>([]);

    useEffectAsync(async () => {
        setBreeds(await dogRepo.getBreeds());
    }, []);

    if(breeds.length === 0) return <p>Loading breeds...</p>;

    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            {breeds.map(breed => 
            <option value={breed}>{breed}</option>
            )}
        </select>
    );
}