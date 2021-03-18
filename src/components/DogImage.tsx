import React from "react";
import { useContext } from "react"
import { DogImageContext } from "../contexts/DogImageContext"

export default () => {
    const { url } = useContext(DogImageContext);

    return <img src={url} />;
}