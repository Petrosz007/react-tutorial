import React, { createContext, useState } from "react";

export interface DogImageContextState {
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: DogImageContextState = {
    url: "https://images.dog.ceo/breeds/retriever-curly/n02099429_1122.jpg",
    setUrl: () => {},
};

export const DogImageContext = createContext(initialState);

export const DogImageProvider = ({ children }: { children: React.ReactNode }) => {
    const [url, setUrl] = useState("");

    return (
        <DogImageContext.Provider value={{ url, setUrl }}>
            {children}
        </DogImageContext.Provider>
    );
}
