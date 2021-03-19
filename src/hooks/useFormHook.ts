import { useState } from "react"

export const useFormHook = (initialState: string) => {
    const [value, setValue] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // setValue({
        //     ...value,
        //     [event.target.name]: event.target.value,
        // });
        setValue(event.target.value);
    };

    return { onChange, value };
}